import { useState } from 'react'

export default function UseToggleState(bool = false) {
    const [state, setState] = useState(bool)
    const toggleState = () => {
        setState(!state)
    }
    return [state, toggleState]
}