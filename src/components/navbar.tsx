"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("beranda");

    return (
        <section id="beranda">
            <nav className="flex items-center fixed z-50 justify-between w-full px-4 sm:px-6 lg:px-20 py-4 shadow bg-gradient-to-r from-blue-50 to-blue-100">
                {/* Logo */}
                <Image
                    src="/sinergi-ji.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-8 w-auto sm:h-7 md:h-8"
                    priority
                />
                {/* Navigation Links */}
                <div className="flex gap-6 text-base font-medium">
                    {/* Beranda */}
                    <Link
                        href="#beranda"
                        onClick={() => setActive("beranda")}
                        className={`transition ${active === "beranda"
                            ? "text-[#407896]"
                            : "text-gray-500 hover:text-[#407896]"
                            }`}
                    >
                        Beranda
                    </Link>
                    {/* Fitur */}
                    <Link
                        href="#fitur"
                        onClick={() => setActive("fitur")}
                        className={`transition ${active === "fitur"
                            ? "text-[#407896]"
                            : "text-gray-500 hover:text-[#407896]"
                            }`}
                    >
                        Fitur
                    </Link>
                    {/* Kontak */}
                    <Link
                        href="#kontak"
                        onClick={() => setActive("kontak")}
                        className={`transition ${active === "kontak"
                            ? "text-[#407896]"
                            : "text-gray-500 hover:text-[#407896]"
                            }`}
                    >
                        Kontak
                    </Link>
                </div>
            </nav>
        </section>
    );
}
