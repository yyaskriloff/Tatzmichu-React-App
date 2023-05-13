

export function H1({ light, children, className }) {
    return (<h1 className={`${className} text-center text-3xl font-payton leading-9 font-medium tracking-[0.125em] ${!light ? "text-dark-purple" : "text-light-purple"} `} > {children}</ h1 >)
}

export function H2({ light, children, className }) {
    return (<h2 className={`${className} text-center text-3xl font-open font-semibold leading-8 tracking-[0.125em]  ${!light ? "text-dark-purple" : "text-light-purple"} `} > {children}</ h2 >)
}

export function H3({ light, children, className }) {
    return (<h3 className={`${className} text-2xl font-bold ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h3 >)
}

export function H4({ light, children, className }) {
    return (<h4 className={`${className} text-xl font-bold ${!light ? "text-dark-purple" : "text-light-purple"}`} > {children}</ h4 >)
}

export function Text({ children, className }) {
    return (<p className={`${className} text-base font-open leading-7 font-normal tracking-[0.125em]`} > {children}</p>)
}

export function SmallText({ children, className }) {
    return (<h1 className={`${className} text-lg  `} > {children}</ h1 >)
}
