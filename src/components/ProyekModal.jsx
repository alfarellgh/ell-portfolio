import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./useLanguage";

const ProyekModal = ({ proyek, onClose }) => {
  const { t, lang } = useLanguage();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    if (closing) return; // cegah klik ganda
    setClosing(true);
    setTimeout(onClose, 200); // samakan dengan --animate-duration
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div
      className={`animate__animated ${closing ? "animate__fadeOut" : "animate__fadeIn"} [--animate-duration:200ms] fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4`}
      onClick={handleClose}
    >
      {/* kotak luar: tidak scroll, tempat tombol X menempel */}
      <div
        className={`animate__animated ${closing ? "animate__zoomOut" : "animate__zoomIn"} [--animate-duration:200ms] relative w-full max-w-2xl lg:max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={t("tutup")}
          className="absolute top-3 right-3 z-10 cursor-pointer bg-white rounded-full"
        >
          <i className="ri-close-line ri-xl"></i>
        </button>

        {/* wrapper scroll: scroll di mobile, diam di desktop */}
        <div className="modal-scroll max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          <div className="lg:flex lg:h-[80vh]">
            <img
              src={proyek.gambar}
              alt={proyek.nama[lang]}
              className="w-full lg:w-120 lg:h-full lg:shrink-0 lg:object-cover mb-2 lg:mb-0"
            />
      
            {/* kolom kanan: scroll di desktop */}
            <div className="modal-scroll p-6 lg:flex-1 lg:overflow-y-auto">
              <h2 className="text-2xl font-bold mb-2">{proyek.detailnama[lang]}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proyek.kategori.map((kategor, i) => (
                    <p key={i} className="bg-zinc-100 text-zinc-600 border border-zinc-300 rounded-full px-3 font-semibold mb-4 w-fit text-sm">
                      {kategor}
                    </p>
                  ))}
                </div>
              
              <p className="text-base mb-4 text-justify whitespace-pre-line">{proyek.detail[lang]}</p>
              <p className="py-2 font-semibold text-zinc-700 text-sm">TOOLS USED:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proyek.tools.map((tool, i) => (
                  <p key={i} className="py-1 px-3 border border-zinc-500 bg-zinc-100 text-zinc-700 text-sm rounded-full font-semibold">
                    {tool}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-3 md:flex">
                {proyek.path ? (
                  <Link
                    to={proyek.path}
                    className="w-full p-3 shadow-sm rounded-lg text-center bg-white border border-zinc-300 hover:bg-zinc-100 text-sm lg:text-base"
                  >
                    <i className="ri-global-line pr-2"></i>{t("proyekLink")}
                  </Link>
                ) : (
                  <p className="w-full p-3 rounded-lg text-center bg-zinc-300 text-zinc-600 cursor-not-allowed text-sm lg:text-base">
                    {t("proyekDeploy")}
                  </p>
                )}
                {proyek.code ? (
                  <Link
                  to={proyek.code} className="w-full p-3 shadow-sm rounded-lg text-center bg-white border border-zinc-300 hover:bg-zinc-100 text-sm lg:text-base"><i class="ri-github-line pr-2"></i>{t("proyekCode")}</Link>
                ) : (
                  <div className="hidden"></div>
                )}
                {proyek.paper ? (
                  <Link
                  to={proyek.paper} className="w-full p-3 shadow-sm rounded-lg text-center bg-white border border-zinc-300 hover:bg-zinc-100 text-sm lg:text-base">
                    <i className="ri-external-link-line pr-2"></i>{t("proyekPaper")}</Link>
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyekModal;