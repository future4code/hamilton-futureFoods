import axios from "axios";
import {routes} from "../../src/containers/Router";
import {replace, push} from "connected-react-router";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"
export const login = (email, password) => async(dispatch) => {
    const body = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        window.localStorage.setItem("token", response.data.token)
        // window.localStorage.setItem("user", response.data.user)
        //Avaliando o hasAdress
        if(response.data.user.hasAdress) {
            dispatch(replace(routes.feedPage))
        } else {
            dispatch(push(routes.myadress))
        }
    } catch(error){
        window.alert("Usuário não encontrado!")
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
