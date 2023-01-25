function Parent({ className = "text-left", children }) {
    return (
        <div classname={`${className} `}>
            <p>{children}</p>
        </div>
    )
}

<Parent className="text-center">lorem ipsum dolor sit amet, consectetur adipiscing</Parent>