import Image from './Image'
import { Text } from './text'
export default function ChanceCard({ img = "Plant", children, className }) {
    return (
        <div className="w-48 h-48 rounded-2xl border-2 flex flex-col justify-center items-center text-center text-dark-purple !font-bold px-6 bg-white my-10 mx-6">
            <Image src={`${img}.png`} className={`${className} h-10 mb-2`} />
            <Text className="!font-bold leading-5">{children}</Text>
        </div>
    )
}