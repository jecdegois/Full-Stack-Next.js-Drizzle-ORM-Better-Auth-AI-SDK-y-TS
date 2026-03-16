"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";



export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa tu email" />
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput type="password" id="password"/>
      <FormSubmit value="Iniciar sesión"/>
    </Form>
  );
}
