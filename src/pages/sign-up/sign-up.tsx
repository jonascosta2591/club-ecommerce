import validator from 'validator'

import CustomButton from "../../components/custom-button/custom-buttom.component"
import CustomInput from "../../components/custom-input/custom-input.component"
import Header from "../../components/header/header.component"

import {FiLogIn} from 'react-icons/fi'
import {useForm} from 'react-hook-form'

//styles
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.styles"
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

interface SignUpForm {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    confirmaSenha:string;
}

const SignUpPage = () => {


    const {register, formState: {errors}, handleSubmit, watch} = useForm<SignUpForm>()

    const watchSenha = watch('senha')

    const handleSubmitPress = (data: SignUpForm) => {
        console.log(data)
    }

    return (
        <>
        <Header />

        <SignUpContainer>
            <SignUpContent>
                <SignUpHeadline>Crie sua conta</SignUpHeadline>

                <SignUpInputContainer>
                    <p>Nome</p>
                    <CustomInput hasError={!!errors?.nome} placeholder="Digite seu nome" {...register('nome', {required: true})}/>
                    {errors?.nome?.type === "required" && (
                        <InputErrorMessage>Campo nome obrigatório</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Sobrenome</p>
                    <CustomInput hasError={!!errors?.sobrenome} placeholder="Digite seu sobrenome" {...register('sobrenome', {required: true})}/>
                    {errors?.sobrenome?.type === "required" && (
                        <InputErrorMessage>Campo sobrenome obrigatório</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>E-mail</p>
                    <CustomInput hasError={!!errors?.email} placeholder="Digite seu E-mail" {...register('email', {required: true, validate: (value) => {
                        return validator.isEmail(value)
                    }})}/>
                    {errors?.email?.type === "required" && (
                        <InputErrorMessage>Campo email obrigatório</InputErrorMessage>
                    )}
                    {errors?.email?.type === "validate" && (
                        <InputErrorMessage>O email precisa ser válido</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Senha</p>
                    <CustomInput hasError={!!errors?.senha} placeholder="Digite sua senha" {...register('senha', {required: true})} type="password"/>
                    {errors?.senha?.type === "required" && (
                        <InputErrorMessage>Campo senha obrigatório</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Confirmação de senha</p>
                    <CustomInput hasError={!!errors?.confirmaSenha} placeholder="Digite novamente sua senha" {...register('confirmaSenha', {required: true, validate: (value) => {
                        return value === watchSenha
                    }})} type="password"/>
                    {errors?.confirmaSenha?.type === "required" && (
                        <InputErrorMessage>Confirmação de senha obrigatório</InputErrorMessage>
                    )}
                    {errors?.confirmaSenha?.type === "validate" && (
                        <InputErrorMessage>A confirmação de senha precisa ser igual a senha</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>
                    Criar conta
                </CustomButton>
            </SignUpContent>
        </SignUpContainer>
        </>
    )
}

export default SignUpPage