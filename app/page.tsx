"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";

import AnimatedBackground from "./components/AnimatedBackground";

/* ---------- Animaciones reutilizables ---------- */

// Entrada escalonada del hero
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Chips de tecnologías (aparecen uno a uno)
const chipsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

// Tarjetas: aparecen al hacer scroll y suben al pasar el ratón
const cardAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  },
  whileHover: { y: -6, transition: { duration: 0.2 } },
  viewport: { once: true, margin: "-60px" },
});

// Bloque que aparece al hacer scroll
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Página ---------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Barra de progreso de scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate min-h-screen overflow-hidden text-white">
  <AnimatedBackground />

  {/* Barra de progreso */}
  <motion.div
          style={{ scaleX }}
          className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-lime-400"
        />

        {/* Barra de navegación */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12"
        >
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

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full border border-zinc-700 px-5 py-2 text-sm transition-colors hover:border-lime-400 hover:text-lime-400 sm:block"
          >
            Hablemos ↗
          </motion.a>

          <button
            type="button"
            aria-label="Abrir o cerrar menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-lime-400 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-zinc-800 bg-[#09090b] px-6 py-6 text-sm text-zinc-300 md:hidden"
              >
                <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
                  Sobre mí
                </a>
                <a href="#proyectos" onClick={() => setMenuOpen(false)}>
                  Proyectos
                </a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>
                  Contacto
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Presentación principal */}
        <section
          id="inicio"
          className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-24"
        >
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="mb-6 flex items-center gap-3 text-sm tracking-widest text-zinc-400"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="h-px w-8 origin-left bg-lime-400"
              />
              DESARROLLADOR DE SOFTWARE
            </motion.p>

            <motion.h1 variants={item} className="text-5xl font-bold">
              Alejandro Del Valle López
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-8 text-zinc-300"
            >
              Técnico Superior en{" "}
              <span className="font-medium text-lime-400">
                Desarrollo de Aplicaciones Multiplataforma
              </span>
              , actualmente especializándome en{" "}
              <span className="font-medium text-lime-400">
                Inteligencia Artificial y Big Data
              </span>
              .
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl leading-7 text-zinc-400"
            >
              Me interesa el desarrollo de software, la automatización de
              procesos y el análisis de datos. En este portfolio comparto mis
              proyectos, las tecnologías que utilizo y lo que voy aprendiendo.
            </motion.p>

            <motion.div
              variants={chipsContainer}
              className="mt-7 flex flex-wrap gap-2"
            >
              {["Python", "SQL", "Kotlin", "React", "Next.js"].map((tech) => (
                <motion.span
                  key={tech}
                  variants={chip}
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-lime-400 hover:text-lime-400"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-lime-300"
              >
                Ver mis proyectos ↘
              </motion.a>

              <motion.a
                href="#formacion"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-zinc-700 px-6 py-3 transition-colors hover:border-white"
              >
                Mi formación
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
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

            {/* Badge flotante */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 rounded-lg border border-zinc-700 bg-[#151518] px-4 py-3"
            >
              <p className="text-xs text-zinc-400">FORMACIÓN ACTUAL</p>
              <p className="mt-1 font-medium text-lime-400">IA & Big Data</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Sobre mí y formación */}
        <section
          id="sobre-mi"
          className="border-t border-zinc-800 bg-[#0f0f12]/60 px-6 py-24 md:px-12"
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="mb-4 text-sm tracking-widest text-lime-400">
                01 / PERFIL
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Desarrollo, datos y aprendizaje continuo.
              </h2>
            </Reveal>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <Reveal delay={0.1}>
                <p>
                  Mi formación en{" "}
                  <span className="text-white">
                    Desarrollo de Aplicaciones Multiplataforma (DAM)
                  </span>{" "}
                  me ha permitido trabajar con diferentes tecnologías y conocer
                  distintas áreas del desarrollo de software.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Actualmente curso una especialización en{" "}
                  <span className="text-lime-400">
                    Inteligencia Artificial y Big Data
                  </span>
                  , con la que estoy ampliando mis conocimientos sobre datos y
                  nuevas tecnologías.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  Quiero seguir creciendo como profesional mediante proyectos
                  prácticos, aprendiendo nuevas herramientas y desarrollando
                  soluciones que puedan utilizarse en situaciones reales.
                </p>
              </Reveal>
            </div>
          </div>

          <div id="formacion" className="mx-auto mt-20 max-w-7xl">
            <Reveal>
              <p className="mb-4 text-sm tracking-widest text-lime-400">
                FORMACIÓN ACADÉMICA
              </p>

              <h3 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">
                Mi recorrido académico<span className="text-lime-400">.</span>
              </h3>
            </Reveal>

            {/* Línea temporal */}
            <div className="relative">
              {/* Línea horizontal en ordenador (se dibuja al llegar) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px origin-left bg-zinc-700 lg:block"
              />

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
                {/* Bachillerato */}
                <motion.article
                  {...cardAnim(0)}
                  className="relative rounded-xl border border-zinc-800 bg-[#111114] p-6 transition-colors duration-300 hover:border-lime-400/60 md:p-8"
                >
                  <div className="absolute -top-[9px] left-8 hidden h-4 w-4 rounded-full border-4 border-[#0f0f12] bg-lime-400 lg:block" />

                  <p className="text-sm font-medium tracking-wide text-lime-400">
                    2022 — 2024
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Bachillerato
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">Bachillerato</h4>

                  <p className="mt-3 leading-7 text-zinc-400">
                    IES García Nieto
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Las Rozas, Madrid
                  </p>

                  <span className="mt-6 inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    Finalizado
                  </span>
                </motion.article>

                {/* Grado Superior */}
                <motion.article
                  {...cardAnim(0.15)}
                  className="relative rounded-xl border border-zinc-800 bg-[#111114] p-6 transition-colors duration-300 hover:border-lime-400/60 md:p-8"
                >
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

                  <p className="mt-3 leading-7 text-zinc-400">PRO2FP</p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Las Rozas, Madrid
                  </p>

                  <span className="mt-6 inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    Finalizado · DAM
                  </span>
                </motion.article>

                {/* Especialización */}
                <motion.article
                  {...cardAnim(0.3)}
                  className="relative rounded-xl border border-lime-400/40 bg-[#111114] p-6 transition-colors duration-300 hover:border-lime-400 md:p-8"
                >
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

                  <p className="mt-3 leading-7 text-zinc-400">Linkia FP</p>

                  <p className="mt-1 text-sm text-zinc-500">Madrid</p>

                  <span className="mt-6 inline-block rounded-full border border-lime-400/40 px-3 py-1 text-xs text-lime-400">
                    En curso
                  </span>
                </motion.article>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="mb-4 text-sm tracking-widest text-lime-400">
                02 / TRABAJO SELECCIONADO
              </p>

              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  Proyectos destacados<span className="text-lime-400">.</span>
                </h2>
                <p className="max-w-md text-zinc-400">
                  Proyectos con los que aprender, experimentar y convertir
                  ideas en soluciones reales.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              <motion.article
                {...cardAnim(0)}
                className="group rounded-2xl border border-zinc-800 bg-[#111114] p-7 transition-colors duration-300 hover:border-lime-400/60 md:p-10"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                    ANDROID · KOTLIN
                  </span>
                  <span className="text-2xl text-lime-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="text-3xl font-semibold">Vexo</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Aplicación de descubrimiento de películas y series,
                  desarrollada con Kotlin y arquitectura MVVM para ayudar a
                  encontrar qué ver.
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
              </motion.article>

              <motion.article
                {...cardAnim(0.15)}
                className="group rounded-2xl border border-zinc-800 bg-[#111114] p-7 transition-colors duration-300 hover:border-lime-400/60 md:p-10"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                    PYTHON · ETL
                  </span>
                  <span className="text-2xl text-lime-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="text-3xl font-semibold">
                  Automatización de datos
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Flujo de extracción, transformación y carga de datos para
                  trabajar con información de Excel y bases de datos SQL.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Python", "Pandas", "SQL Server", "SQLAlchemy"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contacto"
          className="border-t border-white/10 bg-zinc-950/60 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                Contacto
              </p>

              <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                ¿Hablamos?
              </h2>

              <p className="mb-12 max-w-2xl text-gray-400">
                Estoy buscando nuevas oportunidades profesionales en el sector
                tecnológico. Si quieres conocer más sobre mi perfil, mis
                proyectos o mi formación, puedes contactar conmigo o consultar
                mi currículum.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Email */}
              <motion.a
                {...cardAnim(0)}
                href="mailto:alejandrodelvalle74@gmail.com"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-lime-400/50 hover:bg-white/10"
              >
                <div className="mb-4 text-2xl text-lime-400">@</div>
                <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
                <p className="break-words text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                  alejandrodelvalle74@gmail.com
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Escríbeme directamente →
                </p>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                {...cardAnim(0.1)}
                href="https://www.linkedin.com/in/alejandro-del-valle-lopez-993370334/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-lime-400/50 hover:bg-white/10"
              >
                <div className="mb-4 text-2xl font-bold text-lime-400">in</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  LinkedIn
                </h3>
                <p className="text-sm text-gray-400 transition-colors group-hover:text-lime-400">
                  Mi perfil profesional
                </p>
                <p className="mt-4 text-sm text-gray-500">Conectemos →</p>
              </motion.a>

              {/* GitHub */}
              <motion.a
                {...cardAnim(0.2)}
                href="https://github.com/BongoDeveloper26"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-lime-400/50 hover:bg-white/10"
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
              </motion.a>

              {/* Currículum */}
              <motion.a
                {...cardAnim(0.3)}
                href="/curriculum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-lime-400/50 hover:bg-white/10"
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
              </motion.a>
            </div>

            <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
              © 2026 Alejandro del Valle López. Todos los derechos reservados.
            </footer>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
