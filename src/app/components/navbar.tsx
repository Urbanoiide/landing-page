'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '@/micelaneus/logo.png';
import { historialProyectos, Proyecto } from '@/app/components/proyectos';



export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  let hideTimeout: ReturnType<typeof setTimeout>;
   const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setMenuAbierto(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setMenuAbierto(false), 200);
  };
  const proyectosPorAnio: { [key: string]: string[] } = {};
  (historialProyectos as Proyecto[]).forEach((proyecto: Proyecto) => {
  if (!proyectosPorAnio[proyecto.anio]) {
    proyectosPorAnio[proyecto.anio] = [];
  }
  proyectosPorAnio[proyecto.anio].push(proyecto.titulo);
  
});

  return (
    <nav className="bg-[#007cc3] shadow-md sticky top-0 z-50 p-[5px] px-[10px]">
      <div className="flex items-center w-full">
        <div className="px-[20px]">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={150} />
          </Link>    
        </div>

        {/* ul normal */}
        <ul className="hidden md:flex space-x-6 font-medium text-white ml-auto pr-4">
        <li><Link href="/" className="link-azul">Inicio</Link></li>
        <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/proyectlist" className="link-azul cursor-pointer">Proyectos</Link>

            <div
              className={`
                absolute right-0 mt-2 bg-white shadow-lg p-6 rounded-lg z-50
                max-h-[500px] overflow-auto min-w-[800px]
                transition-opacity duration-200
                ${menuAbierto
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'}
              `}
            >
              <div className="grid grid-cols-4 gap-10 text-black">
                {Object.entries(proyectosPorAnio)
                  .sort((a, b) => b[0].localeCompare(a[0]))
                  .map(([anio]) => (
                    <div key={anio}>
                      <h3 className="font-bold text-base text-gray-800 border-b border-gray-300 mb-2">
                        {anio}
                      </h3>
                        <ul className="list-none space-y-2">
                          {proyectosPorAnio[anio].slice(0, 5).map((nombre) => {
                            const p = historialProyectos.find(p => p.titulo === nombre)!;
                            return (
                              <li key={p.id}>
                                <Link
                                  href={`/proyectos/${p.id}`}
                                  className="hover:underline text-[15px] text-gray-700 block"
                                >
                                  {p.titulo}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                    </div>
                  ))}
              </div>
            </div>
        </li>
        <li><Link href="/servicios" className="link-azul">Acerca de Nosotros</Link></li>
        <li><Link href="/contacto" className="link-azul">Contacto</Link></li>
        </ul>

        {/* burger */}
        <div className="md:hidden ml-auto pr-2">
          <button onClick={() => setMenuAbierto(!menuAbierto)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* menu para desplegar */}
      {menuAbierto && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium text-gray-700 py-[20px]">
          <li><Link href="/" onClick={() => setMenuAbierto(false)} className="link-azul">Inicio</Link></li>
          <li><Link href="/servicios" onClick={() => setMenuAbierto(false)} className="link-azul">Proyectos</Link></li>
          <li><Link href="/servicios" onClick={() => setMenuAbierto(false)} className="link-azul">Acerca de Nosotros</Link></li>
          <li><Link href="/contacto" onClick={() => setMenuAbierto(false)} className="link-azul">Contacto</Link></li>
        </ul>
      )}
    </nav>
  );
}
