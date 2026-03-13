import Header from "@/src/shared/components/ui/Header";
import Link from "next/link";

export default function PublictLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
