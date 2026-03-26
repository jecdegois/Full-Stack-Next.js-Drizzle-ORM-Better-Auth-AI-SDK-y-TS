"use server"

import { SignInInput, SignUpInput, SignUpSchema } from "../schemas/authSchema"
import { authService } from "../services/AuthService";

export async function signUpAction(input: SignUpInput) {
    const data = SignUpSchema.safeParse(input);


    if(!data.success){
        return {
            error: "Hubo un error",
            success: ""
        }
    }
    const response = await authService.register(data.data)

    return response;

}


export async function signInAction(input: SignInInput) {

    console.log("llego", input)
}