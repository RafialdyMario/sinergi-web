import Contact from "@/components/contact";
import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="font-sans w-full min-h-screen flex flex-col">
      <main className="flex flex-col w-full">
        <Navbar />
        <Hero />

        {/* Wrapper dengan divider tegas */}
        <div className="divide-y-2 divide-gray-300">
          <FeatureSection
            title="Lapor"
            description="Ajukan laporan kapan saja hanya dengan beberapa langkah sederhana. 
            Isi data, tambahkan detail, upload foto, dan laporan Anda langsung terkirim."
            image="/lapor.png"
          />
          <FeatureSection
            title="Dashboard"
            description="Lihat perkembangan laporan hanya dalam sekali pandang. Grafik interaktif membantu Anda memahami data lebih cepat dan akurat."
            image="/dashboard.png"
            reverse
          />
          <FeatureSection
            title="Tiket"
            description="Ketahui status laporan Anda. Dari proses hingga selesai, semua tiket dapat dipantau dengan mudah."
            image="/list-tiket.png"
          />
          <FeatureSection
            title="Catatan"
            description="Setiap laporan bisa diperkuat dengan catatan tambahan, memastikan informasi tersampaikan dengan baik."
            image="/catatan.png"
            reverse
          />
          <FeatureSection
            title="Lacak"
            description="Pantau setiap tahapan laporan Anda, dari diterima hingga selesai dikerjakan, semua tercatat dan transparan."
            image="/lacak-tiket.png"
          />
          <FeatureSection
            title="Notifikasi"
            description="Dapatkan notifikasi real time untuk setiap perkembangan."
            image="/notifikasi.png"
            reverse
          />
        </div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
