import { useState, useEffect, useRef } from "react"
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./useLanguage";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("beranda");
  const isClicking = useRef(false);
  const clickTimeout = useRef(null);

  const menuItems = [
    { id: "beranda", label: t("Beranda"), icon: "ri-home-4" },
    { id: "tentang", label: t("Tentang"), icon: "ri-info-card" },
    { id: "proyek", label: t("Proyek"), icon: "ri-folder-2" },
    { id: "kontak", label: t("Kontak"), icon: "ri-user-add" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);

      // kalau sudah mentok paling atas, paksa aktifkan "beranda"
      if (window.scrollY < 50 && !isClicking.current) {
        setActiveMenu("beranda");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking.current) return; // abaikan observer saat masih proses klik

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  },);

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    isClicking.current = true;

    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClicking.current = false;
    }, 800); // sesuaikan dengan lama durasi smooth-scroll kamu
  };

  return (
    <div className="navbar py-5 flex items-center justify-between md:fixed md:top-0 md:left-0 md:w-full md:z-45 md:bg-white md:shadow-sm md:px-10">
      <div className="logo flex gap-5">
        <h1 className="text-3xl font-bold text-black p-1">Portfolio</h1>
        <LanguageSelector />
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white backdrop-blur-md md:p-4 p-6 rounded-tr-2xl rounded-tl-2xl md:bg-transparent transition-all md:transition-none z-40 ${scrolled ? "bottom-0 opacity-100" : "-bottom-10 opacity-0"}`}>
        {menuItems.map((item) => {
          const isActive = activeMenu === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleMenuClick(item.id)}
                className={`sm:text-lg text-base font-medium transition-colors ${isActive ? "md:text-neutral-500" : "text-black md:hover:text-neutral-500"}`}
              >
                <i className={`${item.icon}-${isActive ? "fill" : "line"} md:hidden text-2xl`}></i>
                <span className="hidden md:inline">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar