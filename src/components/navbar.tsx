import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-6 shadow bg-gradient-to-r from-blue-50 to-blue-100">
            <Image
                src="/sinergi-ji.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-8 w-auto sm:h-7 md:h-8"
                priority
            />
        </nav>
    );
}
