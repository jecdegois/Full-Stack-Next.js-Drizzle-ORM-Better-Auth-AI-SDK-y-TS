import {
  Form,
  FormErrors,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordInput,
  ForgotPasswordSchema,
} from "../schemas/authSchema";
import { forgotPasswordAction } from "../actions/auth-action";
import toast from "react-hot-toast";
useForm;
export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: "all",
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    const { error, success } = await forgotPasswordAction(data);

    if (error) toast.error(error);

    if (success) toast.success(success);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput id="email" type="email" {...register("email")} />
      {errors.email && <FormErrors>Email no valido</FormErrors>}
      <FormSubmit value={"Recuperar Contraseña"} />
    </Form>
  );
}
