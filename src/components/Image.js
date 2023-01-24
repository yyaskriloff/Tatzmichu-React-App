import { default as Nimage } from 'next/image'

export default function Image({ className = 'w-96 h-96', src }) {
    return (
        <div className={`relative ${className}`}>
            <Nimage
                src={`/${src}`}
                fill
                className="absolute"
            />
        </div>
    )
}