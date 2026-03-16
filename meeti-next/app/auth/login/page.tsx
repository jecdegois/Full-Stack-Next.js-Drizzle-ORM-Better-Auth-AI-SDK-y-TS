import LoginForm from "@/src/features/auth/components/LoginForm";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
      <LoginForm />

      <nav className="mt-20 flex justify-between">
        <Link className="font-bold" href={"/auth/create-account"}>
          No tienes una cuenta?
        </Link>
        <Link className="font-bold" href={"/auth/forgot-password"}>
          Olvidaste tu contraseña?
        </Link>
      </nav>
    </>
  );
}
