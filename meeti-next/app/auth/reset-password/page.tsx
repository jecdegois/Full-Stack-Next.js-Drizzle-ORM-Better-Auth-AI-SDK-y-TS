import SetPasswordForm from "@/src/features/auth/components/SetPasswordForm";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Define tu nuevo password"),
};

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Define tu nuevo password</Heading>
      <SetPasswordForm />
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
