export default function Button({ children, className }) {
    return (
        <button className={`${className} transition-colors duration-300 bg-light-green font-bold font-open text-white py-4 px-6 rounded-full hover:bg-light-purple tracking-[0.125em] text-base`} > {children}</button >
    )
}