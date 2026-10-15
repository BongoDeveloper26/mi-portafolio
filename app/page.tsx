"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Barra de navegación */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a href="#inicio" className="text-xl font-bold tracking-tight">
          AV<span className="text-lime-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#sobre-mi" className="transition hover:text-lime-400">
            Sobre mí
          </a>
          <a href="#proyectos" className="transition hover:text-lime-400">
            Proyectos
          </a>
          <a href="#contacto" className="transition hover:text-lime-400">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-lime-400 hover:text-lime-400 sm:block"
        >
          Hablemos ↗
        </a>

        <button
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-lime-400 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {menuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-zinc-800 bg-[#09090b] px-6 py-6 text-sm text-zinc-300 md:hidden">
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </nav>
        )}
      </header>

           {/* Presentación principal */}
      <section
        id="inicio"
        className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-24"
      >
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm tracking-widest text-zinc-400">
            <span className="h-px w-8 bg-lime-400" />
            DESARROLLADOR DE SOFTWARE
          </p>

                    <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl text-lime-400">
            Alejandro
            <br />
            Del Valle López
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Técnico Superior en{" "}
            <span className="font-medium text-lime-400">
              Desarrollo de Aplicaciones Multiplataforma
            </span>
            , actualmente especializándome en{" "}
            <span className="font-medium text-lime-400">
              Inteligencia Artificial y Big Data
            </span>
            .
          </p>

          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            Me interesa el desarrollo de software, la automatización de
            procesos y el análisis de datos. En este portfolio comparto mis
            proyectos, las tecnologías que utilizo y lo que voy aprendiendo.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Python", "SQL", "Kotlin", "React", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Ver mis proyectos ↘
            </a>

            <a
              href="#formacion"
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-white"
            >
              Mi formación
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-2xl border border-lime-400/40" />

          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src="/alejandro.jpg"
              alt="Fotografía de Alejandro Del Valle López"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-lg border border-zinc-700 bg-[#151518] px-4 py-3">
            <p className="text-xs text-zinc-400">FORMACIÓN ACTUAL</p>
            <p className="mt-1 font-medium text-lime-400">IA & Big Data</p>
          </div>
        </div>
      </section>

            {/* Sobre mí y formación */}
      <section
        id="sobre-mi"
        className="border-t border-zinc-800 bg-[#0f0f12] px-6 py-24 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm tracking-widest text-lime-400">
              01 / PERFIL
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Desarrollo, datos y aprendizaje continuo.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>
              Mi formación en{" "}
              <span className="text-white">
                Desarrollo de Aplicaciones Multiplataforma (DAM)
              </span>{" "}
              me ha permitido trabajar con diferentes tecnologías y conocer
              distintas áreas del desarrollo de software.
            </p>

            <p>
              Actualmente curso una especialización en{" "}
              <span className="text-lime-400">
                Inteligencia Artificial y Big Data
              </span>
              , con la que estoy ampliando mis conocimientos sobre datos y
              nuevas tecnologías.
            </p>

            <p>
              Quiero seguir creciendo como profesional mediante proyectos
              prácticos, aprendiendo nuevas herramientas y desarrollando
              soluciones que puedan utilizarse en situaciones reales.
            </p>
          </div>
        </div>

                           <div id="formacion" className="mx-auto mt-20 max-w-7xl">
            <p className="mb-4 text-sm tracking-widest text-lime-400">
              FORMACIÓN ACADÉMICA
            </p>

            <h3 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">
              Mi recorrido académico<span className="text-lime-400">.</span>
            </h3>

            {/* Línea temporal */}
            <div className="relative">
              {/* Línea horizontal en ordenador */}
              <div className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-zinc-700 lg:block" />

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
                {/* Bachillerato */}
                <article className="relative rounded-xl border border-zinc-800 bg-[#111114] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/60 md:p-8">
                  <div className="absolute -top-[9px] left-8 hidden h-4 w-4 rounded-full border-4 border-[#0f0f12] bg-lime-400 lg:block" />

                  <p className="text-sm font-medium tracking-wide text-lime-400">
                    2022 — 2024
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Bachillerato
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    Bachillerato
                  </h4>

                  <p className="mt-3 leading-7 text-zinc-400">
                    IES García Nieto
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Las Rozas, Madrid
                  </p>

                  <span className="mt-6 inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    Finalizado
                  </span>
                </article>

                {/* Grado Superior */}
                <article className="relative rounded-xl border border-zinc-800 bg-[#111114] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/60 md:p-8">
                  <div className="absolute -top-[9px] left-8 hidden h-4 w-4 rounded-full border-4 border-[#0f0f12] bg-lime-400 lg:block" />

                  <p className="text-sm font-medium tracking-wide text-lime-400">
                    2024 — 2026
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Grado Superior
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    Desarrollo de Aplicaciones Multiplataforma
                  </h4>

                  <p className="mt-3 leading-7 text-zinc-400">
                    PRO2FP
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Las Rozas, Madrid
                  </p>

                  <span className="mt-6 inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    Finalizado · DAM
                  </span>
                </article>

                {/* Especialización */}
                <article className="relative rounded-xl border border-lime-400/40 bg-[#111114] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400 md:p-8">
                  <div className="absolute -top-[9px] left-8 hidden h-4 w-4 rounded-full border-4 border-[#0f0f12] bg-lime-400 lg:block" />

                  <p className="text-sm font-medium tracking-wide text-lime-400">
                    2026 — 2027
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Especialización
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    Inteligencia Artificial y Big Data
                  </h4>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Linkia FP
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Madrid
                  </p>

                  <span className="mt-6 inline-block rounded-full border border-lime-400/40 px-3 py-1 text-xs text-lime-400">
                    En curso
                  </span>
                </article>
              </div>
            </div>
          </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-widest text-lime-400">
            02 / TRABAJO SELECCIONADO
          </p>

          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Proyectos destacados<span className="text-lime-400">.</span>
            </h2>
            <p className="max-w-md text-zinc-400">
              Proyectos con los que aprender, experimentar y convertir ideas
              en soluciones reales.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="group rounded-2xl border border-zinc-800 bg-[#111114] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-400/60 md:p-10">
              <div className="mb-12 flex items-start justify-between">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  ANDROID · KOTLIN
                </span>
                <span className="text-2xl text-lime-400">↗</span>
              </div>

              <h3 className="text-3xl font-semibold">Vexo</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Aplicación de descubrimiento de películas y series, desarrollada
                con Kotlin y arquitectura MVVM para ayudar a encontrar qué ver.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Kotlin", "MVVM", "APIs", "Firebase"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="group rounded-2xl border border-zinc-800 bg-[#111114] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-400/60 md:p-10">
              <div className="mb-12 flex items-start justify-between">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  PYTHON · ETL
                </span>
                <span className="text-2xl text-lime-400">↗</span>
              </div>

              <h3 className="text-3xl font-semibold">Automatización de datos</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Flujo de extracción, transformación y carga de datos para
                trabajar con información de Excel y bases de datos SQL.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Python", "Pandas", "SQL Server", "SQLAlchemy"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

           ```tsx
      {/* Contacto */}
      <section
        id="contacto"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Contacto
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            ¿Hablamos?
          </h2>

          <p className="mb-12 max-w-2xl text-gray-400">
            Estoy buscando nuevas oportunidades profesionales en el sector
            tecnológico. Si quieres conocer más sobre mi perfil, mis proyectos
            o mi formación, puedes contactar conmigo o consultar mi currículum.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Email */}
            <a
              href="mailto:alejandrodelvalle74@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:bg-white/10"
            >
              <div className="mb-4 text-2xl text-lime-400">@</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Email
              </h3>
              <p className="break-words text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                alejandrodelvalle74@gmail.com
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Escríbeme directamente →
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alejandro-del-valle-lopez-993370334/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:bg-white/10"
            >
              <div className="mb-4 text-2xl font-bold text-lime-400">in</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                LinkedIn
              </h3>
              <p className="text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                Mi perfil profesional
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Conectemos →
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/BongoDeveloper26"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:bg-white/10"
            >
              <div className="mb-4 text-2xl text-lime-400">&lt;/&gt;</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                GitHub
              </h3>
              <p className="text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                Mis proyectos y código
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Explora mi trabajo →
              </p>
            </a>

            {/* Currículum */}
            <a
              href="/curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:bg-white/10"
            >
              <div className="mb-4 text-2xl text-lime-400">CV</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Currículum
              </h3>
              <p className="text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                Formación, habilidades y experiencia
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Ver mi currículum →
              </p>
            </a>

          </div>

          <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © 2026 Alejandro del Valle López. Todos los derechos reservados.
          </footer>
        </div>
      </section>
```
    </main>
  );
}