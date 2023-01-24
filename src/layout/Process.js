import SideCard from '@/components/SideCard'
import { H1, H3, Text } from '@/components/text'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Proccess() {
    return (
        <Section>
            <H1>Our Process</H1>
            <div>
                <SideCard number={1} icon="/">
                    <H3>Reach Out</H3>
                    <Text>Seminary Principal or Mentor reaches out and fills out a form on behalf of the student</Text>
                </SideCard>

                <SideCard number={2}>
                    <H3>Discuss</H3>
                    <Text>Our case manager reviews the application and discusses with the principal how the student can be helped most efficiently</Text>
                </SideCard>
                <SideCard number={3}>
                    <H3>Financials</H3>
                    <Text>If therapy is required, the amount of necessary funding is discussed and agreed upon</Text>
                </SideCard>
                <SideCard number={4}>
                    <H3>Support</H3>
                    <Text>The student attends therapy and we manage financial transactions directly with the therapist</Text>
                </SideCard>
                <SideCard number={5}>
                    <H3>Follow Up</H3>
                    <Text>Tatzmichu follows up with the principal to determine if additional sessions and funds are required</Text>
                </SideCard>
            </div>
            <div>
                <Button>Donate</Button>
                <Link href="/">See Full Terms & Protocols</Link>
            </div>
        </Section>
    )
}