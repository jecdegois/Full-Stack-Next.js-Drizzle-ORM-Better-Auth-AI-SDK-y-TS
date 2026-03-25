import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";
import { APIError } from "better-auth";
import { authRepository, IAuthRepository } from "./AuthRepository";

//Aqui va toda la logica de negocio

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    //Revisar si el usuario existe
    const user = await this.authRepository.userExists(email);

    if (user) {
      return {
        error: "Este E-mail ya está registrado",
        success: "",
      };
    }

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
      success: "Cuenta creada correctamente",
    };
  }
}

export const authService = new AuthService(authRepository);
