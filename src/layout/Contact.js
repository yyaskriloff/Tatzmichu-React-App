import Section from "@/components/Section"
import ContactForm from "@/components/ContactForm"
import { H1, Text } from '@/components/text'

export default function () {

    return (
        <Section>
            <H1>Get In Touch</H1>
            <Text>Reach out to our Tatzmichu staff with any questions, or to apply for funding.</Text>
            <div>
                <ContactForm />
            </div>
        </Section>
    )
}