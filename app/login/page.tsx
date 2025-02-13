import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { LoginForm } from "@/components/general/forms/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <Link href="/" className="flex items-center gap-2  self-center">
          <Image src={Logo} alt="logo" className="size-10 bg-white"></Image>
          <h1 className="text-2xl font-bold">
            Job<span className="text-primary">Victor</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
