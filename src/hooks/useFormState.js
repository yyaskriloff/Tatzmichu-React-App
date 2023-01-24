import { useState } from 'react'

export default function useFormState(state = "active") {
    // active, pending, error , complete
    const [value, setState] = useState(state)

    function pending() {
        setState("pending")
    }

    function error() {
        setState("error")
    }

    function complete() {
        setState("complete")
    }


    return [value, pending, error, complete]
}