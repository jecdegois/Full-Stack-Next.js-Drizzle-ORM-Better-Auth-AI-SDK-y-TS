import { SignUpInput } from "../schemas/authSchema"


//Aqui va toda la logica de negocio

class AuthService {

    async register(credentials: SignUpInput) {

        const { name, email, password } = credentials;

        //Revisar si el usuario existe


        //Validaciones de negocio

        //Manejar el registro

    }
}


export const authService = new AuthService()