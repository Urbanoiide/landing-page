import { FaBolt, FaCogs, FaLightbulb, FaTools, FaProjectDiagram } from "react-icons/fa";

export const servicios = [
  {
    id: "alta",
    titulo: "Alta Tensión",
    descripcion:
      "Diseño e instalación de proyectos de alta tensión cumpliendo con las normas de seguridad.",
    icono: <FaBolt size={28} className="text-blue-600" />,
    imagen: "https://www.bbva.com/wp-content/uploads/2022/02/tension-electrica-apertura.jpg",
  },
  {
    id: "media",
    titulo: "Media Tensión",
    descripcion:
      "Redes de distribución eléctrica para equipos de media tensión, subestaciones y canalizaciones.",
    icono: <FaCogs size={28} className="text-blue-600" />,
    imagen: "https://media.licdn.com/dms/image/v2/C4E12AQHHM_YLrp8ezg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1648207104330?e=2147483647&v=beta&t=WedOEdFyJ5EhqBI5G4jjQ3FQXYz9hSx5NuYzPtaqgu8",
  },
  {
    id: "baja",
    titulo: "Baja Tensión",
    descripcion:
      "Instalaciones eléctricas interiores y exteriores, alumbrado y tableros de distribución.",
    icono: <FaLightbulb size={28} className="text-blue-600" />,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLTQ7bGQWUXt8voPjovMiSr37b7XuYNY_AA&s",
  },
  {
    id: "proyectos",
    titulo: "Proyectos y Estudios",
    descripcion:
      "Cálculo de líneas, tarifas, puesta a tierra, análisis de cargas y factibilidad económica.",
    icono: <FaProjectDiagram size={28} className="text-blue-600" />,
    imagen: "https://www.tecsaqro.com.mx/wp-content/uploads/2020/09/proyectos_electricos_1.jpg",
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento",
    descripcion:
      "Sistemas de protección, respaldo, UPS y control de motores para garantizar continuidad eléctrica.",
    icono: <FaTools size={28} className="text-blue-600" />,
    imagen: "https://alfaservicioscr.com/wp-content/uploads/2024/07/Mantenimiento-electrico.webp",
  },
];
