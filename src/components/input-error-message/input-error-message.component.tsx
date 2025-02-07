import {FunctionComponent} from 'react'

//styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorMessageProps {
    children: React.ReactNode
}

const InputErrorMessage:FunctionComponent<InputErrorMessageProps> = ({children}) => {
    return (
        <>
            <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
        </>
    )
}

export default InputErrorMessage