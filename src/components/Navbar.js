import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";

const iconStyles = 'text-2xl text-center w-full'

export default function Navbar({ children, open, toggleNav }) {
    return (
        <div className='flex flex-row justify-between relative h-18 p-2'>
            <div>
                <Image
                    src="/favicon.ico"
                    width={60}
                    height={60}
                />
            </div>
            <div>
                <button className='rounded-full bg-light-purple h-16 w-16 xl:hidden' onClick={toggleNav}>
                    {open ? <FaTimes className={iconStyles} /> : <FaBars className={iconStyles} />}
                </button>
                <div className={`transition-max-height duration-500 ease-out absolute bottom-0 left-0 translate-y-full w-screen  ${open ? "max-h-screen" : "max-h-0	"} overflow-hidden xl:static xl:translate-y-0 xl:w-auto xl:max-h-screen`}>
                    <div className="flex flex-col justify-center w-full text-center xl:flex-row xl:items-center	">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}