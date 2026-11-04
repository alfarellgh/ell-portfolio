import HeroImage from "/assets/hero-image.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/photoshop.svg";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1200",
  },
];

export const listSertifikat = [
  {
    id: 1,
    gambar: Proyek1up,
    nama: {
      ID: "Sertifikat Kompetensi Programmer",
      EN: "Certificate Competency Programmer",
    },
    sumber: "BNSP",
    tahun: "2025-2028",
    dad: 100,
    path: "https://drive.google.com/file/d/1b2VXSUexxP1x0eq-2-KixSDoRheXrQBK/view?usp=sharing",
  },
  {
    id: 2,
    gambar: Proyek1up,
    nama: {
      ID: "Sertifikat Kompetensi Desainer Grafis Madya",
      EN: "Certificate Competency Intermediete Graphic Designer",
    },
    sumber: "BNSP",
    tahun: "2026-2029",
    dad: 200,
    path: "https://drive.google.com/file/d/1fPp_9g_hPdZx4vaiurYQ3vi-cMLD0X4F/view?usp=sharing",
  },
  {
    id: 3,
    gambar: Proyek1up,
    nama: {
      ID: "Sertifikat Program Maganghub - Perancang Grafis dan Multimedia",
      EN: "Certificate Maganghub Programme - Graphic Designer and Multimedia",
    },
    sumber: "Kementerian Ketenagakerjaan",
    tahun: "2026",
    dad: 200,
    path: "https://drive.google.com/file/d/1uuVjxML1abvSYRPFvH3nrG0e1BrZOg8w/view?usp=sharing",
  },
];

// import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek1up from "/assets/proyek/proyek1up.webp"
import Proyek2up from "/assets/proyek/proyek2up.webp"
import Proyek3up from "/assets/proyek/proyek3up.webp"
// import Proyek2 from "/assets/proyek/proyek2.webp";
// import Proyek3 from "/assets/proyek/proyek3.webp";
// import Proyek4 from "/assets/proyek/proyek4.webp";
// import Proyek5 from "/assets/proyek/proyek5.webp";
// import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1up,
    nama: {
      ID: "SISFO Form Persediaan Barang",
      EN: "SISFO Form Persediaan Barang",
    },
    detailnama: {
      ID: "Sistem Informasi Form Persediaan Barang - Dit. Standalitu, Kementerian Perdagangan",
      EN: "SISFO Form Persediaan Barang - Directorate of Standardization and Quality Control, Ministry of Trade",
    },
    kategori: ["Internship", "Diploma Final Project"],
    desk: {
      ID: "Aplikasi permohonan barang dan pengelolaan data untuk Dit. Standalitu, Kementerian Perdagangan.",
      EN: "An item request and data management application for Dit. Standalitu, Ministry of Trade.",
    },
    detail: {
      ID: "Aplikasi SIPERA sangat dibutuhkan oleh karyawan Direktorat Standardisasi dan Pengendalian Mutu (Dit. Standalitu), Kementerian Perdagangan. Proses pengisian Form Permohonan Barang perlu didukung oleh sistem yang dapat diakses kapan saja dan di mana saja oleh para karyawan. Tata kelola digital diperlukan agar admin dapat dengan mudah menghimpun dan mengelola data barang maupun transaksi secara efisien.\n\nSIPERA hadir sebagai solusi yang mampu menyediakan layanan pengelolaan data dan informasi secara tepat dan akurat, serta mendukung proses input form yang lebih efisien guna meminimalkan human error (kesalahan akibat faktor manusia).",
      EN: "The SIPERA application is highly needed by employees of the Directorate of Standardization and Quality Control (Dit. Standalitu), Ministry of Trade. The process of filling out the Item Request Form needs to be supported by a system that can be accessed anytime and anywhere by staff. Digital management is required so that administrators can easily collect and manage item data and transactions efficiently.\n\nSIPERA comes as a solution that provides accurate and reliable data and information management services, and supports a more efficient form input process to minimize human error.",
    },
    tools: ["PHP", "Bootstrap", "Laravel", "MySQL"],
    dad: "200",
    path: null,
    paper: "https://drive.google.com/file/d/1Ef8EurB_ZvvIqqxu6pegp-zdOrlHE2pe/view?usp=sharing",
    code: "https://github.com/alfarellgh/FormPersediaan/tree/master",
  },
  {
    id: 2,
    gambar: Proyek2up,
    nama: {
      ID: "Company Profile",
      EN: "Company Profile",
    },
    detailnama: {
      ID: "Company Profile",
      EN: "Company Profile",
    },
    kategori: ["Dummy Project"],
    desk: {
      ID: "Website company profile dummy untuk brand produk rajut crochet.",
      EN: "A dummy company profile website for a crochet products brand.",
    },
    detail: {
      ID: "JIE'CROCHE adalah proyek dummy company profile yang saya buat untuk menggambarkan sebuah brand produk rajut crochet. Website ini memperkenalkan profil brand, ragam produk, dan cerita di balik setiap karya kepada calon pelanggan.\n\nProyek ini saya buat sebagai latihan merancang tampilan company profile yang rapi dan menarik, dengan layout responsif agar nyaman dibuka di perangkat apa pun, serta animasi halus saat halaman di-scroll untuk memberikan pengalaman pengguna yang lebih hidup.",
      EN: "JIE'CROCHE is a dummy company profile project I built to represent a crochet products brand. The website introduces the brand profile, its range of products, and the story behind each handmade piece to potential customers.\n\nI built this project as practice in designing a clean and engaging company profile, with a responsive layout that works comfortably on any device, plus smooth scroll animations to create a more lively user experience.",
    },
    tools: ["Vite", "ReactJS", "TailwindCSS"],
    dad: "300",
    path: null,
    paper: null,
    code: null,
  },
  {
    id: 3,
    gambar: Proyek3up,
    nama: {
      ID: "Web Portfolio",
      EN: "Web Portfolio",
    },
    detailnama: {
      ID: "Web Portfolio",
      EN: "Web Portfolio",
    },
    kategori: ["Dummy Project"],
    desk: {
      ID: "Website portfolio pribadi dua bahasa (ID/EN) yang menampilkan profil, pengalaman, proyek, dan sertifikat.",
      EN: "A bilingual (ID/EN) personal portfolio website showcasing my profile, experience, projects, and certificates.",
    },
    detail: {
      ID: "Web Portfolio adalah website pribadi yang saya bangun untuk memperkenalkan diri, pengalaman, dan karya-karya saya dalam satu halaman. Isinya mencakup profil singkat, riwayat pendidikan dan pengalaman dalam bentuk timeline, tools yang saya gunakan, sertifikat, daftar proyek, hingga formulir kontak.\n\nWebsite ini dibuat dengan ReactJS dan Vite, di-styling menggunakan TailwindCSS, serta dilengkapi animasi scroll dengan AOS. Beberapa fitur yang saya kembangkan: pilihan bahasa Indonesia dan Inggris, navigasi yang otomatis menandai bagian halaman yang sedang dilihat, pop up detail untuk tiap proyek, dan tampilan responsif yang nyaman dibuka dari desktop maupun ponsel.",
      EN: "Web Portfolio is a personal website I built to present myself, my experience, and my work on a single page. It covers a short profile, an education and experience timeline, the tools I use, certificates, a list of projects, and a contact form.\n\nThe site is built with ReactJS and Vite, styled with TailwindCSS, and enhanced with scroll animations using AOS. Features I developed include an Indonesian/English language switch, a navigation that automatically highlights the section currently in view, a detail pop up for each project, and a responsive layout that works comfortably on both desktop and mobile.",
    },
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    path: null,
    paper: null,
    code: "https://github.com/alfarellgh/ell-portfolio",
  },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
