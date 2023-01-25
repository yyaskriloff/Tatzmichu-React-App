import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";

const iconStyles = 'text-base  text-center w-full'

export default function Navbar({ children, open, toggleNav }) {
    return (
        <div className='flex relative flex-row justify-between w-screen h-32 p-2 bg-white z-50 pt-8 px-4'>
            <div>
                <Image
                    src="/favicon.ico"
                    width={60}
                    height={60}
                />
            </div>
            <div>
                <button className={`${open ? "bg-light-purple" : ""} rounded-full  h-14 w-14 xl:hidden`} onClick={toggleNav}>
                    {open ? <FaTimes className={iconStyles + " text-white"} /> : <FaBars className={iconStyles} />}
                </button>
                <div className={`z-10 transition-max-height duration-500 ease-out absolute bottom-0 left-0 translate-y-full w-screen  ${open ? "max-h-screen" : "max-h-0"} overflow-hidden bg-light-blue xl:static xl:translate-y-0 xl:w-auto xl:max-h-screen`}>
                    <nav className="flex flex-col justify-center w-full text-center xl:flex-row xl:items-center bg-inherit ">
                        {children}
                    </nav>
                </div>
            </div>

        </div>
    )
}