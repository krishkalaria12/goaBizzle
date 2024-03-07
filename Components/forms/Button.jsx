import { Button as ButtonField } from "@nextui-org/react"

function Button({
    children,
    className = '',
    ...props
}) {
    return (
        <ButtonField {...props} className={`${className}`}>
            {children}
        </ButtonField>
    )
}

export default Button