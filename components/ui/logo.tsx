import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/blueye-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="BluEyes">
      <Image
        src={LogoImage}
        alt="BluEyes logo"
        width={40}
        height={40}
        priority
        className="rounded-full"
      />
    </Link>
  );
}
