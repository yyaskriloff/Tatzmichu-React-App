import Section from '@/components/Section';
import ChanceCard from '@/components/ChanceCard';
import { H1 } from '@/components/text'
import Button from '@/components/Button'

export default function Chance() {
    return (
        <Section>
            <H1>Tatzmichu Gives Girls The Chance To:</H1>
            <div>
                <ChanceCard ar="5/3" img='Plant'>Heal and process</ChanceCard>
                <ChanceCard ar="1/1" img="Lock">Become secure adults</ChanceCard>
                <ChanceCard ar="5/3" img="Home">Build wholesome homes</ChanceCard>
                <ChanceCard ar="1/1" img="Sun">Nurture healthy relationships</ChanceCard>
                <ChanceCard ar="1/1" img="Link">Strengthen the Jewish future</ChanceCard>
            </div>
            <div>
                <H1 light >Help Tatzmichu Save Lives.</H1>
                <Button>Donate</Button>
            </div>
        </Section>
    )
}