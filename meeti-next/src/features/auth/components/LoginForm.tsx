"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormErrors,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/src/shared/components/forms";
import { SignInInput, signInSchema } from "../schemas/authSchema";
import { signInAction } from "../actions/auth-action";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });


  const onSubmit = async(data: SignInInput) => {
    await signInAction(data)
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu email"
        {...register("email")}
      />
      {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
      <FormLabel htmlFor="password">Password</FormLabel>

      <FormInput type="password" id="password" {...register("password")} />

      {errors.password && <FormErrors>{errors.password.message}</FormErrors>}

      <FormSubmit value="Iniciar sesión" />
    </Form>
  );
}
