import { auth } from "@/src/lib/auth";
import {
  ForgotPasswordInput,
  SetPasswordInput,
  SignInInput,
  SignUpInput,
} from "../schemas/authSchema";
import { APIError, success } from "better-auth";
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
        callbackURL: "/dashboard",
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
        console.log(error.message);
        console.log(error.statusCode);
        const messages: Record<number, string> = {
          401: "Credenciales inválidas",
          403: "Cuenta no confirmada. Por favor, revisa tu correo para confirmar tu cuenta.",
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

  async requestPasswordReset(input: ForgotPasswordInput) {
    //Revisar si el usuario existe
    const user = await this.authRepository.userExists(input.email);

    if (!user) {
      return {
        error: "Este usuario no existe",
        success: "",
      };
    }

    await auth.api.requestPasswordReset({
      body: {
        email: input.email,
      },
    });

    return {
      error: "",
      success: "Hemos enviado un email, con instrucciones",
    };
  }

  async confirmPasswordReset(input: SetPasswordInput, token: string) {
    const { newPassword } = input;

    try {
      await auth.api.resetPassword({
        body: {
          newPassword: newPassword,
          token: token,
        },
      });

      return {
        error: "",
        success: "Password reestablecido correctamente",
      };
    } catch (error) {
      if (error instanceof APIError) {
        return {
          error: "Token no valido o expirado",
          success: "",
        };
      }
    }

    return {
      error: "",
      success: "",
    };
  }
}

export const authService = new AuthService(authRepository);
