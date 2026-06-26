import z from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().trim().min(1, { error: "El nombre es obligatorio" }),
  email: z.email({ error: "El correo electrónico no es válido" }),
  password: z
    .string()
    .trim()
    .min(8, { error: "La contraseña debe tener al menos 8 caracteres" }),
  passwordConfirmation: z
    .string()
    .trim()
    .min(1, { error: "El password no puede ir vacio" }),

  newPassword: z
    .string()
    .trim()
    .min(1, { error: "La contraseña debe tener al menos 8 caracteres" }),
});

export const SignInSchema = BaseAuthSchema.pick({
  email: true,
}).extend({
  password: z
    .string()
    .trim()
    .min(1, { error: "El password no puede ir vacio" }),
});

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
  error: "Las contraseñas no coinciden",
  path: ["passwordConfirmation"], //Donde se muestra el error
});

export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type SetPasswordInput = z.infer<typeof SetPasswordSchema>;

export const SetPasswordSchema = BaseAuthSchema.pick({
  newPassword: true,
  passwordConfirmation: true,
}).refine((data) => data.newPassword === data.passwordConfirmation, {
  error: "Las contraseñas no coinciden",
  path: ["passwordConfirmation"],
});

export const ForgotPasswordSchema = BaseAuthSchema.pick({
  email: true,
});
