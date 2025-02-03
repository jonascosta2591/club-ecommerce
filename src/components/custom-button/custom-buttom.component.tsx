import { FunctionComponent, ButtonHTMLAttributes } from 'react'

import { CustomButtonContainer, IconContainer } from "./custom-buttom.styles"


interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode;
    startIcon?: React.ReactNode;
}

const CustomButton:FunctionComponent<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
    return <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        {children}
        </CustomButtonContainer>
}

export default CustomButton