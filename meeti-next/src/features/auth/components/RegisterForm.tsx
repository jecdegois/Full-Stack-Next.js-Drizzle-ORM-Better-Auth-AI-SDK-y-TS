"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormErrors,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components/forms";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { signUpAction } from "../actions/auth-action";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: SignUpInput) => {
    const { success, error } = await signUpAction(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success );
      reset()
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu nombre"
        {...register("name")}
      />
      {errors.name && <FormErrors>{errors.name.message}</FormErrors>}
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu email"
        {...register("email")}
      />
      {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput id="password" type="password" {...register("password")} />
      {errors.password && <FormErrors>{errors.password.message}</FormErrors>}

      <FormLabel htmlFor="confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="confirmation"
        type="password"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation && (
        <FormErrors>{errors.passwordConfirmation.message}</FormErrors>
      )}

      <FormSubmit value={"Registrarse"} />
    </Form>
  );
}
