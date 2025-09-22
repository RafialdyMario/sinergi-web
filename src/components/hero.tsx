import React from "react";
import Image from "next/image";


export default function Hero() {
    return (
        <div className="pb-20 px-6 flex flex-col lg:flex-row items-center lg:items-stretch justify-between bg-gradient-to-r lg:px-20 from-blue-50 to-blue-100 min-h-screen">
            {/* Bagian teks */}
            <section className="w-full flex flex-col justify-center items-center text-center pb-20 px-4 
                        lg:items-start lg:text-left lg:pb-0">
                <h1 className="text-2xl lg:text-4xl leading-normal font-sans text-gray-900 font-semibold mb-6 lg:pl-6 lg:w-3/4">
                    Sistem Pelaporan Jaringan Transparan dan Dapat Dipantau Secara Real-Time
                </h1>
                <p className="text-base lg:text-lg text-gray-700 mb-8 lg:pl-6 lg:w-3/5">
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
            <section className="flex justify-center lg:justify-end lg:pr-20 self-center">
                <div className="w-60 md:w-68 lg:w-75 relative">
                    <Image
                        src="/splash.png"
                        alt="App Preview"
                        width={360}
                        height={720}
                        className="rounded-3xl drop-shadow-[-8px_8px_20px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>
            </section>
        </div>
    )

}

