import Image from '../components/Image'

export default function Header({ page, children }) {
    let [firstHeader, secondHeader, text] = children

    return (
        <header>
            <div className="bg-hero-pattern bg-no-repeat bg-origin-padding bg-cover h-auto flex flex-col justify-end min-h-[650px] max- px-2 pb-4">
                <div className="flex flex-col px-3 text-center">
                    {firstHeader}
                    {secondHeader}
                    {text ? <div className="mx-8">{text}</div> : null}
                </div>
                <div>
                    <Image className="flex aspect-[5/3] w-full flex-col items-center justify-center" src="therapy.png" />
                </div>
            </div>
        </header>
    )
}