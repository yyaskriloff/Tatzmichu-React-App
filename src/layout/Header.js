import Image from '@/components/Image'

export default function Header({ page, children }) {
    let [firstHeader, secondHeader, text] = children

    return (
        <header>
            <div className="relative bg-hero-pattern bg-no-repeat bg-right  bg-cover h-auto flex flex-col justify-center min-h-[600px] pb-4 mb-16">
                <div className="flex flex-col px-2 text-center">
                    {firstHeader}
                    {secondHeader}
                    {text ? <div>{text}</div> : null}
                </div>
                <Image position="absolute" className="flex aspect-[2/1] w-10/12  flex-col items-center justify-center bottom-0 right-1/2 translate-y-1/4 translate-x-1/2" src="therapy.png" />
            </div>
        </header>
    )
}