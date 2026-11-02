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

export const listSertifikat  = [
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
    path: null,
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
    path: null,
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
    path: null,
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
      ID: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
      EN: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    },
    detail: {
      ID: "Aplikasi SIPERA sangat dibutuhkan oleh karyawan Direktorat Standardisasi dan Pengendalian Mutu (Dit. Standalitu), Kementerian Perdagangan. Proses pengisian Form Permohonan Barang perlu didukung oleh sistem yang dapat diakses kapan saja dan di mana saja oleh para karyawan. Tata kelola digital diperlukan agar admin dapat dengan mudah menghimpun dan mengelola data barang maupun transaksi secara efisien.\n\nSIPERA hadir sebagai solusi yang mampu menyediakan layanan pengelolaan data dan informasi secara tepat dan akurat, serta mendukung proses input form yang lebih efisien guna meminimalkan human error (kesalahan akibat faktor manusia).",
      EN: "The SIPERA application is highly needed by employees of the Directorate of Standardization and Quality Control (Dit. Standalitu), Ministry of Trade. The process of filling out the Item Request Form needs to be supported by a system that can be accessed anytime and anywhere by staff. Digital management is required so that administrators can easily collect and manage item data and transactions efficiently.\n\nSIPERA comes as a solution that provides accurate and reliable data and information management services, and supports a more efficient form input process to minimize human error.",
    },
    tools: ["PHP", "Bootstrap", "Laravel", "MySQL"],
    dad: "200",
    path: "https://drive.google.com/file/d/1Ef8EurB_ZvvIqqxu6pegp-zdOrlHE2pe/view?usp=sharing",
    paper: "https://drive.google.com/file/d/1Ef8EurB_ZvvIqqxu6pegp-zdOrlHE2pe/view?usp=sharing",
    code: "https://drive.google.com/file/d/1Ef8EurB_ZvvIqqxu6pegp-zdOrlHE2pe/view?usp=sharing",
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
      ID: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
      EN: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    },
    detail: {
      ID: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis explicabo et. Repellat sapiente recusandae, eligendi odit aperiam necessitatibus sed?",
      EN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis explicabo et. Repellat sapiente recusandae, eligendi odit aperiam necessitatibus sed?",
    },
    tools: ["Vite", "ReactJS", "Tailwind"],
    dad: "300",
    path: null,
    paper: null,
    code: "https://drive.google.com/file/d/1Ef8EurB_ZvvIqqxu6pegp-zdOrlHE2pe/view?usp=sharing",
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
      ID: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
      EN: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    },
    detail: {
      ID: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis explicabo et. Repellat sapiente recusandae, eligendi odit aperiam necessitatibus sed?",
      EN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis explicabo et. Repellat sapiente recusandae, eligendi odit aperiam necessitatibus sed?",
    },
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    path: null,
    paper: null,
    code: null,
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
