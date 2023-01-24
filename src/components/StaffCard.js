import { H4, Text } from '@/components/text'

export default function StaffCard({ name, position }) {
    return (
        <div>
            <H4>{name}</H4>
            <Text>{position}</Text>
        </div>
    )
}