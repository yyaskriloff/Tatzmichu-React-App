import Section from '../components/Section'
import { H1, H2, Text } from '../components/text'
import { FaBan } from "react-icons/fa";
import Image from '../components/Image'

function BanSign({ children }) {
    return (
        <div className="flex flex-row justify-start items-center">
            <FaBan className="text-light-purple mr-1 text-2xl" />
            <Text className="my-2">{children}</Text>
        </div>
    )
}


export default function Signs() {
    return (
        <Section>
            <div>
                <H1>Her Roommates In Seminary
                    Noticed It First.</H1>
                <div>
                    <div>
                        <div>
                            <BanSign>She couldn’t get up in the morning.</BanSign>
                            <BanSign>She couldn’t concentrate in class.</BanSign>
                            <BanSign>She was anxious in the dorm.</BanSign>
                        </div>
                        <Text>Her teachers realized something was wrong. Concerned, they reached out.</Text>
                        <H2>She needed therapy.</H2>
                    </div>
                    <div>
                        <Image src="Sad-Girl.png" />
                    </div>
                    <div>
                        <H2>Unfortunately,<br />she had no way to pay for it...</H2>
                        <H2 light>She never got the help she needed</H2>
                    </div>
                </div>
            </div>
        </Section>
    )
}