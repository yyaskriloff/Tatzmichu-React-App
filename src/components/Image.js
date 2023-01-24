import { default as Nimage } from 'next/image'

export default function Image({ className = 'w-96 h-96', src = "therapy.png" }) {
    if (src == "Lock.png") {
        console.log(className)
    }
    return (
        <div className={`relative flex flex-col items-center justify-center ${className}`}>
            <Nimage
                src={`/${src}`}
                fill
                className="absolute"
            />
        </div>
    )
}