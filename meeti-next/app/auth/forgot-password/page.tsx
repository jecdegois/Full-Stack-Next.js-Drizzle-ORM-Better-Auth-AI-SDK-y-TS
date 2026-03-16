import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Recuperar Contraseña"),
};

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a meeti</Heading>
      <ForgotPasswordForm />

      <nav className="mt-20 flex justify-between">
        <Link className="font-bold" href={"/auth/login"}>
          Ya tienes una cuenta?
        </Link>
        <Link className="font-bold" href={"/auth/login"}>
          Iniciar Sesion
        </Link>
      </nav>
    </>
  );
}
