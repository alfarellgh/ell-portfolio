import { useLanguage } from "./components/useLanguage";
import Timeline from "./components/Timeline";
import DataImage, { listSertifikat } from "./data";
import { listTools, listProyek } from "./data"
import ProyekModal from "./components/ProyekModal";
import { useState } from "react";

function App() {
  const { t, lang } = useLanguage();
  const [selectedProyek, setSelectedProyek] = useState(null);

  return (
    <>
      <div id="beranda" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid:cols-1 md:pt-30">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>{t("heroQuote")}</q>
          </div>
          <h1 className="text-3xl md:text-5xl/tight font-bold mb-6">{t("heroTitle")}</h1>
          <p className="text-sm/loose lg:text-base/loose mb-6 opacity-50 text-justify">{t("heroDesc")}</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/uc?export=download&id=1EA86mkvbwBB4ZXE4DkdRAGnFFfQlb4sV" className="bg-sky-500 p-4 rounded-4xl hover:bg-sky-400 text-sm lg:text-base text-white">
              {t("heroBtnCV")} <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-200 p-4 rounded-4xl hover:bg-zinc-300">
              {t("heroBtnProyek")} <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="lg:w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang lg:mt-32 py-15" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 shadow-lg bg-white rounded-lg border border-zinc-300" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <h1 className="font-bold mb-5 text-lg">{t("tentangTitle")}</h1>
          <p className="text-sm/loose lg:text-base/loose mb-10 text-justify">{t("tentangDesc")}</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">3<span className="text-sky-500">+</span></h1>
                <p>{t("statProyek")}</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">1<span className="text-sky-500">+</span></h1>
                <p>{t("statTahun")}</p>
              </div>
            </div>
          </div>
        </div>

        <Timeline data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />

        <div className="tools mt-15">
          <h1 className="text-2xl/snug md:text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{t("toolsTitle")}</h1>
          <p className="xl:w-2/5 lg:2-2/4 md:2-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">{t("toolsDesc")}</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-300 bg-white shadow-sm rounded-lg hover:bg-zinc-200 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 p-1 group-hover:bg-zinc-200" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sertifikat mt-15">
          <h1 className="text-2xl/snug md:text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{t("sertifikatTitle")}</h1>
          <p className="xl:w-2/5 lg:2-2/4 md:2-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">{t("sertifikatDesc")}</p>
          <div className="sertifikat-box grid grid-cols-1 gap-4 w-50%">
            {listSertifikat.map((sertif) => (
              <a key={sertif.id} href={sertif.path}>
                <div className="flex items-center justify-between gap-2 p-3 border border-zinc-300 bg-white shadow-sm rounded-lg hover:bg-zinc-200 cursor-pointer group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertif.dad} data-aos-once="true">
                  <div className="flex items-center">
                    <i className="ri-certificate-2-line ri-xl pr-3"></i>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">{sertif.nama[lang]}</h4>
                      <p className="opacity-50 text-sm md:text-base">{sertif.sumber}</p>
                      <p className="opacity-50 text-sm md:text-base">{sertif.tahun}</p>
                    </div>
                  </div>
                  <i className="ri-external-link-line ri-lg md:ri-xl"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* Proyek */}
      <div className="proyek mt-5 py-30" id="proyek">
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{t("proyekTitle")}</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">{t("proyekDesc")}</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              onClick={() => setSelectedProyek(proyek)}
              className="bg-white border border-zinc-300 shadow-md rounded-3xl cursor-pointer hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="rounded-t-2xl mask-b-from-40% mask-b-to-100%" />
              <div className="px-5">
                <h1 className="text-2xl md:text-2xl font-bold mb-4">{proyek.nama[lang]}</h1>
                <p className="text-base/loose mb-4 text-justify">{proyek.desk[lang]}</p>
                <div className="flex flex-wrap gap-2 pb-5">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-100 text-zinc-700 text-sm rounded-full font-semibold" key={index}>#{tool}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-5 sm:py-30" id="kontak">
        <h1 className="text-2xl md:text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{t("kontakTitle")}</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">{t("kontakDesc")}</p>
        <form action="https://formsubmit.co/alfarellgh@gmail.com" method="POST" className="border border-zinc-300 shadow-xl p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-base">{t("formNama")}</label>
              <input type="text" name="nama" placeholder={t("formNamaPlaceholder")} className="border border-zinc-500 p-2 rounded-md text-sm lg:text-base" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-base">{t("formEmail")}</label>
              <input type="email" name="email" placeholder={t("formEmailPlaceholder")} className="border border-zinc-500 p-2 rounded-md text-sm lg:text-base" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-sm lg:text-base">{t("formPesan")}</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder={t("formPesanPlaceholder")} className="border border-zinc-500 p-2 rounded-md text-sm lg:text-base" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-sky-500 p-3 rounded-lg w-full cursor-pointer hover:bg-sky-600 text-white text-sm lg:text-base">{t("formSubmit")}</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
      {selectedProyek && (
        <ProyekModal proyek={selectedProyek} onClose={() => setSelectedProyek(null)} />
      )}
    </>
  )
}

export default App