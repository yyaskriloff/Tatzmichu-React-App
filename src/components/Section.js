export default function Section({ blue, id, children, className }) {
    return (
        <section className={`${className} py-40 px-6 ${blue ? "bg-light-blue" : ""}`} > {children}</section >
    )
}