import Section from '../components/Section'
import Image from '../components/Image'
import { H1, H2, Text } from '../components/text'

export default function about() {
    return (
        <Section>
            <H1>About Tatzmichu</H1>
            <div>
                <div>
                    <H2>Who Are We</H2>
                    <Text>Tatzmichu is an organization providing subsidized therapy to seminary girls in Israel. We give struggling future Jewish mothers the opportunity to get the professional mental and emotional care they need to thrive and build a healthy future.</Text>
                </div>
                <div>
                    <Image />
                </div>
            </div>
        </Section>
    )
}