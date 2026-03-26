import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { APIError } from "better-auth";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { headers } from "next/headers";

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

  async login(credentials: SignInInput) {
    const { email, password } = credentials;

    //Revisar si el usuario existe
    const user = await this.authRepository.userExists(email);

    if (!user) {
      return {
        error: "El usuario no existe",
        success: "",
      };
    }

    //Verificar password y si confirmo la cuenta

    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard",
        },
        headers: await headers(),
      });

      return {
        error: "",
        success: "Sesión iniciada correctamente",
      };
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Credenciales inválidas",
        };

        const errorMessage = messages[error.statusCode];

        if (errorMessage) {
          return {
            error: errorMessage,
            success: "",
          };
        }
      }
    }

    return {
      error: "",
      success: "",
    };
  }
}

export const authService = new AuthService(authRepository);
