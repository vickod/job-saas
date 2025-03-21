import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="logo"
          width={40}
          height={40}
          className="bg-white"
        ></Image>
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Victor</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
