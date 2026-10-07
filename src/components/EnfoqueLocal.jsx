import FadeInSection from "./FadeInSection"

export default function EnfoqueLocal() {
  return (
    <section className="bg-[#0f172a] px-6 py-20 text-white">
      <FadeInSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Desarrollo web en Rancagua y la Región de O’Higgins
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Trabajamos con empresas y pymes locales que necesitan una presencia digital profesional y un sitio preparado para crecer. También atendemos proyectos de otras zonas de Chile de forma remota.
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}