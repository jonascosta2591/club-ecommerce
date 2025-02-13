import { BsGoogle } from "react-icons/bs";
import {FiLogIn} from "react-icons/fi"
import { useForm } from 'react-hook-form'
import validator from 'validator'

//Components
import CustomButton from "../../components/custom-button/custom-buttom.component"
import Header from "../../components/header/header.component"
import CustomInput from "../../components/custom-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";

///Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, formState: {errors}, handleSubmit } = useForm<LoginForm>()
    
    const handleSubmitPress = (data: LoginForm) => {
        console.log(data)
    }

    console.log(errors)
    return (
    <>
        <Header/>
        <LoginContainer>
            <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o google</CustomButton>
                <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>

                <LoginInputContainer>
                    <p>E-mail</p>
                    <CustomInput hasError={!!errors?.email} placeholder="Digite seu e-mail" {...register('email', {required: true, validate: (value) => {
                        return validator.isEmail(value)
                    }})}></CustomInput>
                    {errors?.email?.type === "required" && (
                        <InputErrorMessage>O email é obrigatorio.</InputErrorMessage>
                    )}
                    {errors?.email?.type === 'validate' && (
                        <InputErrorMessage>Email invalido</InputErrorMessage>
                    )}

                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Senha</p>
                    <CustomInput hasError={!!errors?.password} placeholder="Digite sua senha" {...register('password', {required: true})} type="password"></CustomInput>
                    {errors?.password?.type === "required" && (
                        <InputErrorMessage>A senha é obrigatoria.</InputErrorMessage>
                    )}
                </LoginInputContainer>

                <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>
                    Entrar
                </CustomButton>

            </LoginContent>
        </LoginContainer>
    </>
    )
}

export default LoginPage