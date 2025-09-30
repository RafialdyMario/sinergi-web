import { FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt, FaHeadset, FaGlobe } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="kontak"
            className="bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-10 font-sans"
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Kontak Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 max-w-5xl mx-auto text-sm">
                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <span>0811410112</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-500 text-lg" />
                    <span>diskominfo@makassarkota.go.id</span>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                    <FaGlobe className="text-indigo-500 text-lg" />
                    <span>sinergi-ji.makassarkota.go.id</span>
                </div>

                {/* Jam kerja */}
                <div className="flex items-center gap-3">
                    <FaClock className="text-yellow-500 text-lg" />
                    <span>Mon - Fri: 8:00 - 16:00</span>
                </div>

                {/* Lokasi */}
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-red-500 text-lg" />
                    <span>Gedung MGC, Lt. 7, Jl. Sultan Hasanuddin</span>
                </div>

                {/* Call Center */}
                <div className="flex items-center gap-3">
                    <FaHeadset className="text-purple-500 text-lg" />
                    <span>Call Center: 112</span>
                </div>
            </div>

        </section>
    );
}
