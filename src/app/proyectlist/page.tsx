// src/app/proyectoslist/page.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { historialProyectos, Proyecto } from '@/app/components/proyectos';


export default function ProyectosPage() {
  // Agrupar proyectos por año
  const proyectosPorAnio: Record<string, Proyecto[]> = {};
  historialProyectos.forEach((p) => {
    if (!proyectosPorAnio[p.anio]) proyectosPorAnio[p.anio] = [];
    proyectosPorAnio[p.anio].push(p);
  });

  // Años en orden descendente
  const años = Object.keys(proyectosPorAnio).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-8 text-black">
        <h1 className="text-4xl font-bold mb-6">Lista de Proyectos</h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <tbody>
              {años.map((anio) => (
                <React.Fragment key={anio}>
                  {/* Encabezado de año */}
                  <tr>
                    <th
                      colSpan={2}
                      className="text-xl font-semibold text-gray-800 py-2 border-b border-gray-300"
                    >
                      {anio}
                    </th>
                  </tr>

                  {/* Filas de proyectos */}
                  {proyectosPorAnio[anio].map((proy) => (
                    <tr key={proy.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2">
                        <Link
                          href={`/proyectos/${proy.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {proy.titulo}
                        </Link>
                      </td>
                      <td className="px-4 py-2 text-right text-gray-600">
                        Año: {proy.anio}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
