import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function ForgotPasswordForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput id="email" type="email" />
      <FormSubmit value={"Recuperar Contraseña"} />
    </Form>
  );
}
