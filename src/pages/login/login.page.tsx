import { BsGoogle } from "react-icons/bs";
import {FiLogIn} from "react-icons/fi"
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { AuthError, AuthErrorCodes, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

//Components
import CustomButton from "../../components/custom-button/custom-buttom.component"
import Header from "../../components/header/header.component"
import CustomInput from "../../components/custom-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";

///Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

//utilities
import { auth, db, provider } from "../../config/firebase.config";

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, formState: {errors}, handleSubmit, setError } = useForm<LoginForm>()
    
    const handleSubmitPress = async (data: LoginForm) => {
        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
        }catch(err){
            const _err = err as AuthError
           
            if(_err.code === AuthErrorCodes.INVALID_IDP_RESPONSE){
                return setError('email', {type: 'mismatch'})
            }
        }
    }

    const handleSubmitWithGoogle = async () => {
        try{
            const resultUserCredential = await signInWithPopup(auth, provider)

            let user = await getDocs(query(collection(db, 'users'), where('id', '==', resultUserCredential.user.uid)))
            
            if(user.empty){
                await addDoc(collection(db, 'users'), {
                    id: resultUserCredential.user.uid,
                    firstName: 'user google',
                    lastName: 'user google',
                    email: resultUserCredential.user.email,
                    provider: 'google'
                })
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
    <>
        <Header/>
        <LoginContainer>
            <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18}/>} onClick={handleSubmitWithGoogle}>Entrar com o google</CustomButton>
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
                    {errors?.email?.type === 'mismatch' && (
                        <InputErrorMessage>Usuário ou senha invalidos</InputErrorMessage>
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