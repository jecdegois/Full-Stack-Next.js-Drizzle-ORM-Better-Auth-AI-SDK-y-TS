import { emailConfig } from "../config/config";
import {  renderPasswordResetEmail, renderPasswordResetEmailText } from "../templates/PasswordResetEmail";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationsEmail";
import { PasswordResetEmailData, VerificationEmailData } from "../types/email.types";
import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendEmailVerification(data: VerificationEmailData): Promise<void> { 

        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            html:renderVerificationEmail(data),
            subject:'Meeti - Confirma Tu Cuenta',
            text:renderVerificationEmailText(data)
        })


    }


    static async sendPasswordResetToken(data: PasswordResetEmailData): Promise<void> {
        const {email,name,url} = data
        await EmailService.send({
            from: emailConfig.from.passwordReset,
            to: email,
            subject: 'Meeti - Reestablece tu password',
            text: renderPasswordResetEmailText(data),
            html: renderPasswordResetEmail(data)
        })
    }
}