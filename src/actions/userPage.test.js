import { setUserInfo, getProfile, singUp } from "./userPage";
import axios from "axios";
describe("user", () => {
    test("setUserInfo", () => {
        // Preparação
        const mockTodoInfo = "teste";
        // Execução
        const action = setUserInfo(mockTodoInfo);
        // Verificação
        expect (action.type).toBe("SET_USER_INFO");
        expect (action.payload.info).toBe(mockTodoInfo)
    });
test("teste", async () => { 
    // mock de teste
    axios.get = jest.fn(async() => ({
        data: {
            user:{
                email: "astrodev@labenu.com",
                name: "astrodev"
              }
        }    
        
    }))
    
    const dispatch = jest.fn()
    await getProfile() (dispatch)
    expect(dispatch).toHaveBeenCalledWith({
        type: "SET_USER_INFO",
        payload: {
            info:{
                    email: "astrodev@labenu.com",
                    name: "astrodev"
                }
            
                }
        // login
    })
})

test("teste3", async () => {
    axios.post = jest.fn(async() => {
        const body =
        {
        name: "Milene",
        email: "milene@labenu.com.br",
        password: "123456",
        cpf: "000 603 005 69"
        }
    })
    const dispatch = jest.fn()
    await singUp(body)(dispatch)
    expect(dispatch).toBe(login)
}
)

});
