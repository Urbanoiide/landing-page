// src/app/proyectos/[id]/page.tsx
'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { historialProyectos } from '@/app/components/proyectos';

export default function ProyectoPage() {
  const params = useParams();
  const id = params?.id as string; // siempre será string en client
  const proyecto = historialProyectos.find(p => p.id === id);

  if (!proyecto) {
    // no existe: mostramos 404
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto p-8 text-black">
        <h1 className="text-4xl font-bold mb-4">{proyecto!.titulo}</h1>
        <p className="italic mb-6">Año: {proyecto!.anio}</p>
        <Image
          src={proyecto!.imagen}
          alt={proyecto!.titulo}
          width={800}
          height={450}
          className="rounded-lg object-cover"
        />
      </main>

      <Footer />
    </div>
  );
}
