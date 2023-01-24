

export function H1({ light, children }) {
    return (<h1 className={`text-3xl my-2 font-payton leading-9 font-medium tracking-wider ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h1 >)
}

export function H2({ light, children }) {
    return (<h2 className={`text-3xl font-bold ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h2 >)
}

export function H3({ light, children }) {
    return (<h3 className={`text-2xl font-bold ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h3 >)
}

export function H4({ light, children }) {
    return (<h4 className={`text-xl font-bold ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h4 >)
}

export function Text({ children, className }) {
    return (<p className={`text-xl leading-7 font-normal ${className}`} > {children}</p>)
}

export function SmallText({ children }) {
    return (<h1 className={`text-lg  `} > {children}</ h1 >)
}
