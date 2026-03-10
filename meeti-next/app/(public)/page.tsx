import Hero from "@/src/shared/ui/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Meeti - Inicio"
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
