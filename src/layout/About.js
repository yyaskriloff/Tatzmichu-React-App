import Section from '@/components/Section'
import Image from '@/components/Image'
import { H1, H2, Text } from '@/components/text'

export default function About() {
    return (
        <Section>
            <H1 className="mb-8">About Tatzmichu</H1>
            <div>
                <div>
                    <H2 light className="!text-left mb-4">Who Are We</H2>
                    <Text>Tatzmichu is an organization providing subsidized therapy to seminary girls in Israel. We give struggling future Jewish mothers the opportunity to get the professional mental and emotional care they need to thrive and build a healthy future.</Text>
                </div>
                <div>
                    <Image src="Family.png" className="aspect-[6/4] w-full" />
                </div>
            </div>
        </Section>
    )
}