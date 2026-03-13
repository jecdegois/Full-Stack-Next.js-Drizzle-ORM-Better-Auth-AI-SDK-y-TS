import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta")
}

export default function RegisterPage() {
  return (
    <>
      <h1>Crear Cuenta</h1>
    </>
  )
}