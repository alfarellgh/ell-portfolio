import { useRef, useEffect, useState } from "react";
import { useLanguage } from "./useLanguage";

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [Active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  const options = ["ID", "EN"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setLang(value);
    setActive(false);
  };

  return (
    <div ref={wrapperRef} className="language-selector relative my-auto">
      <button
        type="button"
        onClick={() => setActive((prev) => !prev)}
        className="cursor-pointer border border-zinc-600 rounded-lg p-1 flex items-center gap-1 w-full"
      >
        <i className="ri-translate-2"></i>
        <span className="text-sm md:text-base">{lang}</span>
        <i className={`ri-arrow-drop-down-line ri-lg transition-transform ${Active ? "rotate-180" : "rotate-0"}`}></i>
      </button>

      {Active && (
        <ul className="absolute left-0 mt-1 w-full border border-zinc-600 rounded-lg bg-white overflow-hidden z-10">
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)} className="px-2 py-1 text-sm md:text-base cursor-pointer hover:bg-zinc-100">
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;