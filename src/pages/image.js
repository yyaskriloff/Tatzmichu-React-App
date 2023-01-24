import Image from '@/components/Image'

export default function ImagePage() {
    return (
        <>
            <Image className="flex aspect-[5/3] w-full flex-col items-center justify-center" src="therapy.png" />
            <Image className="flex aspect-[1/1] h-10 flex-col items-center justify-center" src="Link.png" />
        </>
    )

}