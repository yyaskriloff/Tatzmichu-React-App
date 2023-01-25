import { default as Nimage } from 'next/image'

export default function Image({ className = 'w-80 h-96', src = "therapy.png", position = "relative" }) {
    return (
        <div className={`${className} ${position} flex flex-col items-center justify-center`}>
            <Nimage
                src={`/${src}`}
                fill
                className="absolute"
            />
        </div>
    )
}