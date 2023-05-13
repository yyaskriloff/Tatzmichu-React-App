import Section from "@/components/Section"
import { H1, H4 } from '@/components/text'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from '@/components/Image'
export default function Endorsment() {
    return (
        <Section>

            <H1 className="mb-20">It Is A Tremendous Mitzvah To<br /> Help This Organization.</H1>

            <div className="flex flex-row">
                <Image src="rabbi.jpeg" className="rounded-full aspect-square overflow-hidden w-4/12 object-contain mr-8" />
                <div className="flex flex-col w-8/12">
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