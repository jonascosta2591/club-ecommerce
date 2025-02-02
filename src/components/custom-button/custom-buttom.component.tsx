import { FunctionComponent } from 'react'

import { CustomButtonContainer } from "./custom-buttom.styles"

interface Props {
    children: React.ReactNode;
}

const CustomButton: React.FC<Props> = ({ children }) => {
    return <CustomButtonContainer>{children}</CustomButtonContainer>
}

export default CustomButton