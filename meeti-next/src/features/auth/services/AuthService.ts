import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";

//Aqui va toda la logica de negocio

class AuthService {
  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    //Revisar si el usuario existe

    //Validaciones de negocio

    //Manejar el registro

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return {
        error: "",
        success: "Cuenta creada correctamente"
    }
  }
}

export const authService = new AuthService();
