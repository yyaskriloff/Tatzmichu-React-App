import Section from '@/components/Section'
import { H1, H2, Text } from '@/components/text'
import { FaBan } from "react-icons/fa";
import Image from '@/components/Image'

function BanSign({ children }) {
    return (
        <div className="flex flex-row justify-start items-center my-4">
            <FaBan className="text-light-purple mr-6 text-3xl" />
            <Text>{children}</Text>
        </div>
    )
}


export default function Signs() {
    return (
        <Section>
            <div>
                <H1 className="my-32">Her Roommates In Seminary Noticed It First.</H1>
                <div>
                    <div>
                        <div className="mb-20">
                            <BanSign>She couldn’t get up in the morning.</BanSign>
                            <BanSign>She couldn’t concentrate in class.</BanSign>
                            <BanSign>She was anxious in the dorm.</BanSign>
                        </div>
                        <Text className="mb-6">Her teachers realized something was wrong. Concerned, they reached out.</Text>
                        <H2 className="!text-left">She needed<br /> therapy.</H2>
                    </div>
                    <div>
                        <Image src="Sad-Girl.png" className="w-full aspect-[5/4]" />
                    </div>
                    <div>
                        <H2 className="!font-bold">Unfortunately,<br />she had no way to pay for it...</H2>
                        <H2 light className="!font-bold">She never got the help she needed</H2>
                    </div>
                </div>
            </div>
        </Section>
    )
}