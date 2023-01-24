import StaffCard from "@/components/StaffCard"
import Section from "@/components/Section"
import { H1 } from "@/components/text"

export default function Staff() {
    return (
        <Section>
            <H1>Meet Our Staff</H1>
            <div>
                <StaffCard name="Chaya Schwarz" position="Founder" icon="/" />
                <StaffCard name="Shiri Feldinger" position="Director" icon="/" />
                <StaffCard name="Hindy Katz" position="Manager" icon="/" />
                <StaffCard name="Rabbi Meir Kahane" position="Rabbinical guidance and supervision" icon="/" />
                <StaffCard name="Rabbi Aviel Chen" position="Chief Financial Officer" icon="/" />
                <StaffCard name="Mrs. Adina Brodsky" position="Social worker, Case Manager" icon="/" />
            </div>
        </Section>
    )
}