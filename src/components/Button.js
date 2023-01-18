export default function Button({ children }) {
    return (
        <button className="transition-colors duration-300 bg-light-green py-2 px-12 rounded-3xl hover:bg-light-purple">{children}</button>
    )
}