import { BsCart3 } from "react-icons/bs";
import { HeaderContainer, HeaderTitle, HeaderItems, HeaderItem } from "./header.styles";
import {useNavigate} from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Header = () => {
    const navigate = useNavigate()

    const {isAuthenticated} = useContext(UserContext)

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        navigate('/sign-up')
    }

    const handleNavigateToInitialPage = () => {
        navigate('/')
    }

    return (
        
        <HeaderContainer>
            <HeaderTitle onClick={handleNavigateToInitialPage}>CLUB CLOTHING</HeaderTitle>
            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                {!isAuthenticated && <>
                    <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                    <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                </>}
                {isAuthenticated && <>
                    <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
                </>}
                <HeaderItem>
                    <BsCart3 size={25}/>
                    <p style={{marginLeft: 5}}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header