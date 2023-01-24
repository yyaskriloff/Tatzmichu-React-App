import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";

const iconStyles = 'text-2xl text-center w-full'

export default function Navbar({ children, open, toggleNav }) {
    return (
        <nav className='flex flex-row justify-between w-screen h-18 p-2 bg-white absolute z-50'>
            <div>
                <Image
                    src="/favicon.ico"
                    width={60}
                    height={60}
                />
            </div>
            <div>
                <button className={`${open ? "bg-light-purple" : ""} rounded-full  h-16 w-16 xl:hidden`} onClick={toggleNav}>
                    {open ? <FaTimes className={iconStyles} /> : <FaBars className={iconStyles} />}
                </button>
                <div className={`z-10 transition-max-height duration-500 ease-out absolute bottom-0 left-0 translate-y-full w-screen  ${open ? "max-h-screen" : "max-h-0"} overflow-hidden bg-white xl:static xl:translate-y-0 xl:w-auto xl:max-h-screen`}>
                    <div className="flex flex-col justify-center w-full text-center xl:flex-row xl:items-center bg-inherit ">
                        {children}
                    </div>
                </div>
            </div>

        </nav>
    )
}