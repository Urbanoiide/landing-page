'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { useState } from "react";
import { servicios } from "@/app/components/servicios1";
import { clientes } from '@/app/components/clientes';   
import { sectores } from '@/app/components/cartasservicios';   


export default function Home() {
      useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);
      const [activo, setActivo] = useState("alta");
      const servicioActivo = servicios.find((s) => s.id === activo);
  return (
    <>
      <Navbar />
      <main >
            <div className=" min-h-screen bg-white px-[20px] py-[5px]">
              <div className="min-h-[800px] w-full flex justify-center bg-[#FE5F03] rounded-[20px]">
                <div className="flex flex-col md:flex-row w-full rounded-[20px] overflow-hidden">
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h1 className="text-[32px] md:text-[60px] font-bold mb-6 text-white leading-tight">
                      Soluciones Eléctricas y de Energía Renovable para Proyectos Residenciales e Industriales.
                    </h1>
                    <p className="text-[16px] italic text-justify text-white bold">
                      Somos una empresa mexicana con 14 años de experiencia en el diseño y construcción de sistemas eléctricos, energía renovable y cableado estructurado, ofreciendo soluciones para proyectos residenciales e industriales.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      className="w-full h-full"
                    >
                      <SwiperSlide>
                        <img
                          src="https://grupoindustronic.com/wp-content/uploads/2024/06/Instalacion-electrica.webp"
                          alt="Instalación eléctrica"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://blog.inimtec.com/wp-content/uploads/2022/07/Instalaciones-el%C3%A9ctricas-en-interior-y-exterior-1024x597.png"
                          alt="Energía renovable"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://www.cimelsa.com/wp-content/uploads/2021/11/Instalaciones-electricas-industriales.jpg"
                          alt="Instalaciones industriales"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white overflow-hidden py-[15px]">
              <div className="flex gap-[20px] w-max">
                {Array.from({ length: 6 }).map((_, i) => (
                  <img
                    key={i}
                    src="https://www.dreiym.com/wp-content/uploads/2022/09/Common-Arc-Flash-Dangers-and-Consequences-To-Be-Aware-Of.jpg"
                    alt={`imagen-${i}`}
                    data-aos="fade-up"
                    className="rounded-[20px] w-[320px] h-[450px] object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <div className="w-full bg-white text-center px-4 py-10">
              <h2 className="text-[32px] md:text-[60px] font-bold text-gray-800">
                Servicios con Experiencia
              </h2>
              <p className="text-[18px] md:text-[20px] italic text-gray-700 mt-4 max-w-4xl mx-auto">
                Contamos con una sólida trayectoria en la ejecución de proyectos eléctricos en alta, media y baja tensión, así como en estudios técnicos especializados.
              </p>
            </div>
            <div className="w-full bg-white py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col space-y-4 md:w-1/2">
                  <h2 className="text-[28px] md:text-[40px] font-bold text-gray-800 text-center md:text-left">
                    Proyectos Eléctricos
                  </h2>
                  <p className="text-gray-600 italic text-center md:text-left">
                    Especialistas en soluciones integrales de electrificación en distintas escalas de tensión.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                    {servicios.map((s) => (
                      <button
                        key={s.id}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:bg-blue-100 ${
                          activo === s.id ? "bg-blue-200 text-blue-800" : "bg-white text-gray-700"
                        }`}
                        onClick={() => setActivo(s.id)}
                      >
                        {s.icono}
                        <span className="text-sm font-medium">{s.titulo}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-8">
                    <h3 className="text-xl font-semibold text-blue-700">{servicioActivo?.titulo}</h3>
                    <p className="text-gray-700 mt-2 text-justify">{servicioActivo?.descripcion}</p>
                  </div>
                </div>

                <div className="md:w-1/2 w-full h-[300px] md:h-[400px]">
                  <img
                    src={servicioActivo?.imagen}
                    alt={`Imagen ${servicioActivo?.titulo}`}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                </div>
            </div>
            </div>
            <div className="w-full bg-white py-16 px-4">
             <div className="w-full  py-16 px-4 md:px-10">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {sectores.map((s, i) => (
                        <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
                          <img src={s.imagen} alt={s.titulo} className="w-full h-90 object-cover transition-transform duration-300 hover:scale-105" />
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.titulo}</h3>
                            <p className="text-gray-600 text-sm mb-4 text-justify">{s.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 py-16 px-4 md:px-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-[32px] md:text-[48px] font-bold text-gray-800 mb-4">
                    Servicio de Renta de Grúas
                  </h2>
                  <p className="text-gray-700 text-lg italic mb-6">
                    Ofrecemos grúas hidráulicas de distintas capacidades para montaje, elevación y maniobras industriales o de construcción. Nuestro servicio incluye operadores certificados y cumplimiento de normas de seguridad.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Grúas de 5 a 80 toneladas</li>
                    <li>Operadores calificados</li>
                    <li>Disponibilidad inmediata</li>
                    <li>Precios competitivos</li>
                  </ul>
                </div>

                {/* Imagen */}
                <div className="md:w-1/2 w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://www.hertzcranes.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-04-22-at-6.19.19-PM.jpeg"
                    alt="Renta de Grúas"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                  <h2 className="text-[28px] md:text-[40px] italic font-bold text-gray-800 mb-10">
                    Algunas de las Empresas con las que hemos Trabajado...
                  </h2>
                  <div className="flex flex-wrap justify-center items-center gap-20">
                    {clientes.map((cliente) => (
                      <div
                        key={cliente.nombre}
                        className="transition duration-300 filter grayscale hover:grayscale-0"
                      >
                        <img
                          src={cliente.logo}
                          alt={cliente.nombre}
                          className="h-10 md:h-20 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            
      </main>
      <Footer />
    </>
  )
}