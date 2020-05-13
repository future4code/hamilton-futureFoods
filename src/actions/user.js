import axios from "axios";
import {routes} from "../../src/containers/Router"
import {replace, push} from "connected-react-router"

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"

export const login = (email, password) => async(dispatch) => {
    const body = {
        email:email,
        password:password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        window.localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)
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
