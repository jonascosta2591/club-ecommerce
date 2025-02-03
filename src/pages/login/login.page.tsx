import { BsGoogle } from "react-icons/bs";

import CustomButton from "../../components/custom-button/custom-buttom.component"
import Header from "../../components/header/header.component"
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

const LoginPage = () => {
    return (
    <>
        <Header/>
        <LoginContainer>
            <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o google</CustomButton>
                <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>

                <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
                <LoginInputContainer>{/* Password Input */}</LoginInputContainer>

                {/* Button */}

            </LoginContent>
        </LoginContainer>
    </>
    )
}

export default LoginPage