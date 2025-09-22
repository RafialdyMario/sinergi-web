import { FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="kontak" className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 font-sans">
            <h2 className="text-3xl font-bold text-center mb-6">Kontak Info</h2>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
                {/* WhatsApp */}
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-400" />
                    <span>0811410112</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    <span>diskominfo@makassarkota.go.id</span>
                </div>
                {/* Jam kerja */}
                <div className="flex items-center gap-2">
                    <FaClock className="text-yellow-400" />
                    <span>Mon - Fri: 8:00 - 16:00</span>
                </div>
                {/* Lokasi */}
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>Gedung MGC, Lt. 7, Jl. Slamet Riyadi</span>
                </div>
                {/* Call Center */}
                <div className="flex items-center gap-2">
                    <FaHeadset className="text-purple-400" />
                    <span>Call Centre: 112</span>
                </div>
            </div>
        </section>
    );
}
