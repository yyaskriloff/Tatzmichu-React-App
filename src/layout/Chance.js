import Section from '@/components/Section';
import ChanceCard from '@/components/ChanceCard';
import { H1 } from '@/components/text'
import Button from '@/components/Button'

export default function Chance() {
    return (
        <Section blue className="pt-8">
            <H1>Tatzmichu Gives Girls The Chance To:</H1>
            <div className="flex flex-row flex-wrap w-full justify-center items-center mt-32">
                <ChanceCard className="aspect-[1/2]" img='Plant'>Heal and process</ChanceCard>
                <ChanceCard className="aspect-[2/3]" img="Lock">Become secure adults</ChanceCard>
                <ChanceCard className="aspect-[5/3]" img="Home">Build wholesome homes</ChanceCard>
                <ChanceCard className="aspect-[1/1]" img="Sun">Nurture healthy relationships</ChanceCard>
                <ChanceCard className="aspect-[1/1]" img="Link">Strengthen the Jewish future</ChanceCard>
            </div>
            <div className="flex flex-col justify-center items-center" >
                <H1 light className="mt-24 mb-14" >Help Tatzmichu Save Lives.</H1>
                <Button className="px-16">Donate</Button>
            </div>
        </Section>
    )
}