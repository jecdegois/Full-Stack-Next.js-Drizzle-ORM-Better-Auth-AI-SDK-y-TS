import { emailConfig } from "../config/config";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationsEmail";
import { VerificationEmailData } from "../types/email.types";
import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendEmailVerification(data: VerificationEmailData): Promise<void> { 

        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            html:renderVerificationEmail(data),
            subject:'Confirma Tu Cuenta',
            text:renderVerificationEmailText(data)
        })


    }
}