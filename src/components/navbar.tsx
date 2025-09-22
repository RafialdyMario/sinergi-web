"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [active, setActive] = useState("beranda");
    const [isOpen, setIsOpen] = useState(false);

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

                {/* Navigation Links - hidden on mobile */}
                <div className="hidden md:flex gap-6 text-base font-medium">
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

                {/* Hamburger menu - only mobile */}
                <button
                    className="md:hidden text-gray-600 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Dropdown menu mobile */}
                {isOpen && (
                    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 w-40 text-sm md:hidden">
                        <Link
                            href="#beranda"
                            onClick={() => {
                                setActive("beranda");
                                setIsOpen(false);
                            }}
                            className={`transition ${active === "beranda"
                                    ? "text-[#407896]"
                                    : "text-gray-600 hover:text-[#407896]"
                                }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="#fitur"
                            onClick={() => {
                                setActive("fitur");
                                setIsOpen(false);
                            }}
                            className={`transition ${active === "fitur"
                                    ? "text-[#407896]"
                                    : "text-gray-600 hover:text-[#407896]"
                                }`}
                        >
                            Fitur
                        </Link>
                        <Link
                            href="#kontak"
                            onClick={() => {
                                setActive("kontak");
                                setIsOpen(false);
                            }}
                            className={`transition ${active === "kontak"
                                    ? "text-[#407896]"
                                    : "text-gray-600 hover:text-[#407896]"
                                }`}
                        >
                            Kontak
                        </Link>
                    </div>
                )}
            </nav>
        </section>
    );
}
