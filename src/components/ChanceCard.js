import Image from './Image'
import { Text } from './text'
export default function ChanceCard({ img = "Plant", children, ar }) {
    return (
        <div className="w-52 rounded-lg border-2">
            <Image src={`${img}.png`} className={`aspect-[${ar}] h-10`} />
            <Text>{children}</Text>
        </div>
    )
}