import { useState } from 'react'

export default function useFormState(state = "active", errValue = false) {
    // active, pending, error , complete
    const [value, setState] = useState(state)
    const [errorState, setError] = useState(errValue)

    function pending() {
        setState("pending")
    }

    function complete() {
        setState("complete")
    }

    async function onSubmit(...inputs) {
        if (value == "pending") {
            return
        }

        const [Name, Email, Message] = inputs
        for (let input of inputs) {
            if (input == "") {
                setError("Please fill out all fields.")
                return
            }
        }
        setError(false)
        pending()
        const response = fetch("apiendpoint", {
            method: "POST",
            body: JSON.stringify({ Name, Email, Message })
        }).then(res => res.json())

        if (response.statusCode === 200) {
            complete()
        } else {
            setError(response.body.errorMessage)
        }

    }


    return [value, onSubmit, errorState]
}