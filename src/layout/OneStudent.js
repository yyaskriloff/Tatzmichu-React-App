import Section from '@/components/Section'
import { H1, H2, Text } from '@/components/text'
import Image from '@/components/Image'
import Button from '@/components/Button'

export default function OneStudent() {
    return (
        <Section>
            <H1>This Is Not The Story Of Just One Student.</H1>
            <div>
                <div>
                    <Image />
                </div>
                <div>
                    <Text>It’s the story of countless young ladies who need mental health care but simply cannot afford it.</Text>
                    <Text>In a world where many adolescents suffer from trauma, abuse, illness, and neglect, there is an aching need for mental and emotional care to get their lives back on track.</Text>
                </div>
            </div>
            <div>
                <H2>Tatzmichu is here to make that happen.</H2>
                <Button>
                    Let’s Make It Happen</Button>
            </div>
        </Section>
    )
}