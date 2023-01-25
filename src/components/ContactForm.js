import { default as inputState } from '@/hooks/useInputState'
import { default as formState } from '@/hooks/useFormState'
import Button from '@/components/Button'
import { Text } from '@/components/text'

export default function ContactForm() {
    const [nameValue, changeName] = inputState()
    const [emailValue, changeEmail] = inputState()
    const [messageValue, changeMessage] = inputState()
    const [formValue, submit, errorMessage] = formState("complete")

    const errorSlide =
        <div>
            <Text>{errorMessage}</Text>
        </div>

    const activeSlide =
        <div>
            <label for="name">Name</label>
            <input id="name" placeholder='Your Name' value={nameValue} onChange={changeName} />
            <label for="email">Email Address</label>
            <input id="email" placeholder='Your Email' value={emailValue} onChange={changeEmail} />
            <label for="message">Message</label>
            <textarea id="message" placeholder="Type Your Message Here" onChange={changeMessage}>{messageValue}</textarea>
            <Button>{formValue !== "pending" ? "Send" : "Sending..."}</Button>
            {errorMessage ? errorSlide : null}
        </div>

    const completeSlide = <div><Text>Thank you! Your submission has been received!</Text></div>



    return (
        <form onSubmit={e => { e.preventDefault(); submit(nameValue, emailValue, messageValue) }}>
            {formValue !== "complete" ? activeSlide : completeSlide}
        </form>
    )
}