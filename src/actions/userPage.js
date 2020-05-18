import axios from "axios";
import {routes} from "../../src/containers/Router";
import {replace, push} from "connected-react-router";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"

// importar para o arquivo profile.js
export const setUserInfo = (info) => { 
    return { type: "SET_USER_INFO", 
    payload: { info }, 
  };
};

export const login = (email, password) => async(dispatch) => {
    const body = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)
        console.log(response.data.user)

        if(response.data.user.hasAddress  ) {
            dispatch(replace(routes.feedpage))
        } else {
            dispatch(push(routes.myadress))
        }
    } catch(error){
        window.alert("Usuário não encontrado!")
        console.log(email,password)
    }
}
export const redirectSignUp = () => async(dispatch) => {
    try {
        dispatch(push(routes.signup))
    } catch {
        alert("Ocorreu um erro inesperado. Tente novamente")
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

// erro 400 - não autorizado
export const putAdress = (form) => async(dispatch) =>  {
    const token = localStorage.getItem ("token")

    try {
        const response = await axios.put(`${baseUrl}/address`, form, {
            headers: {
                
                'auth': token,
               
            }
            
        })

    localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feedpage))

    console.log("deu certo")
    console.log(form)

    } catch (error) {
        alert("Erro")
        console.log(form)
        // dispatch(routes.myadress)
    }
}


export const getProfile = () => async (dispatch) => { 
    
    try { 
        const token = localStorage.getItem('token')
        const response = await axios.get(`${baseUrl}/profile`, 
    { headers: { 'auth': token }, }); 
    dispatch(setUserInfo(response.data.user));
    console.log(response.data.user) 
    }catch (err) { 
        console.log(err); 
    }};
  
    

export const updateProfile = (name, email, password, cpf) => async (dispatch) => {

    const token = localStorage.getItem("token")
    const body = {
        name,
        email,
        cpf
    }
    try {
        
        const response = await axios.put(`${baseUrl}/profile`, body, {
        headers: { auth: token }
        
        })
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)
        dispatch(getProfile());
        console.log(name, email, cpf)
        if(!response.data.user.hasAdress) {
            dispatch(push(routes.myadress))
        } else {
            dispatch(push(routes.myprofile))
        }
        window.alert("Perfil atualizado!")
    } catch (err) {
        window.alert("ERRO!!!")
    }
}