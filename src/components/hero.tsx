import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="pt-30 pb-20 px-6 flex flex-col-reverse lg:flex-row items-center lg:pb-20 lg:items-stretch justify-between bg-gradient-to-r lg:px-30 from-blue-50 to-blue-100">
            {/* Bagian teks */}
            <section className="w-full flex flex-col justify-center items-center text-center 
                        lg:items-start lg:text-left ">
                <h1 className="text-2xl lg:text-4xl leading-normal font-sans text-gray-900 font-semibold mb-6 lg:w-3/4">
                    Sistem Pelaporan Jaringan Transparan dan Dapat Dipantau Secara Real-Time
                </h1>
                <p className="text-base lg:text-lg text-gray-700 mb-8 lg:w-3/5">
                    SINERGI-JI aplikasi untuk pelaporan dan pemantauan jaringan intra pemerintah.
                    Dengan notifikasi real-time, grafik interaktif, dan catatan kolaborasi, penyelesaian masalah jaringan
                    kini lebih cepat, transparan, dan efisien.
                </p>
                <div className="flex flex-row items-center gap-2 justify-center lg:justify-start">
                    <a
                        href="https://apps.apple.com/us/app/sinergi-ji/id6749674543"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="relative h-12 w-40 sm:h-14 sm:w-48 md:h-14 md:w-56">
                            <Image
                                src="/appstore.png"
                                alt="App Store"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.kominfo.iticketing&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="relative h-12 w-40 sm:h-14 sm:w-48 md:h-14 md:w-56">
                            <Image
                                src="/googleplay.png"
                                alt="Google Play"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>
                </div>
            </section>
            {/* Mockup hp */}
            <section className="flex justify-center lg:justify-end self-center">
                <div className="lg:w-120 flex mt-10 lg:mt-0 mx-auto shadow-2xs">
                    <img
                        src="/splash.png"
                        className="w-full max-w-sm lg:max-w-md rounded-2xl drop-shadow-[-8px_8px_20px_rgba(0,0,0,0.4)]"
                    />
                </div>
            </section>
        </div>
    )
}
