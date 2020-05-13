import axios from "axios";
import {routes} from "../../src/containers/Router";
import {replace, push} from "connected-react-router";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"
const loginUser = (login) => {
    return {
    type: "LOGIN_USER",
    payload:{login}
    }
    
}

export const login = (email, password) => async(dispatch) => {
    const body = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)

        if(response.data.user.hasAdress) {
            dispatch(replace(routes.feedPage))
        } else {
            dispatch(push(routes.myadress))
        }
        window.alert("logado!")

        // dispatch(loginUser())
    } catch(error){
        window.alert("Usuário não encontrado!")
        console.log(email,password)
    }
}

export const singUp = (name, email, password, cpf) => async (dispatch) => {
    const body = {
        name,
        email,
        password,
        cpf
    }
     try {
         const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/FourFoodA/signup", body)
         localStorage.setItem("token", response.data.token)
            alert("Usuário cadastrado com sucesso!")

     } catch {
         alert("Ocorreu um erro inesperado. Tente novamente")
     }
}

export const putAdress = (form) => async(dispatch) =>  {
    const token = window.localStorage.getItem ("token")
    const body = {
        form
    }
    try {
        const response = await axios.put (`${baseUrl}/adress`, body, {
            headers: {
                "auth": token,
             "Content-Type":"application/json"

            }
        })
    // Guardar token e dados do user ????
    window.localStorage.setItem("token", response.data.token)
    // Não sei se precisa
    window.localStorage.setItem("user", response.data.user)
    dispatch(routes.feedpage)
    } catch (error) {
        alert("Erro")
        dispatch(routes.myadress)
    }
}