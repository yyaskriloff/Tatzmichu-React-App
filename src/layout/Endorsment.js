import Section from "@/components/Section"
import { H1, H4 } from '@/components/text'
import Button from '@/components/button'
import Link from 'next/link'
export default function Endorsment() {
    return (
        <Section>
            <div>
                <H1>It Is A Tremendous Mitzvah To Help This Organization.</H1>
            </div>
            <div>
                <div></div>
                <div>
                    <H4>Rabbi Yitzchok Jaeger</H4>
                    <Link href="/">Read full endorsement</Link>
                    <Link href="/">Endorsed by Rabbi Eytan Feiner</Link>
                </div>

            </div>
            <div>
                <video></video>
            </div>
            <Button>Donate</Button>
        </Section>
    )
}