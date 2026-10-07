import FadeInSection from "./FadeInSection"

const pasos = [
  {
    titulo: "Diagnóstico",
    desc: "Conversamos sobre tu empresa, tus objetivos y la situación actual de tu sitio."
  },
  {
    titulo: "Propuesta",
    desc: "Definimos el alcance, las prioridades y una estructura adecuada para el proyecto."
  },
  {
    titulo: "Desarrollo",
    desc: "Construimos la web y organizamos sus páginas para presentar tus servicios con claridad."
  },
  {
    titulo: "Optimización",
    desc: "Revisamos la experiencia, la estructura y los elementos SEO definidos para el sitio."
  },
  {
    titulo: "Entrega y seguimiento",
    desc: "Publicamos el proyecto y acompañamos los primeros pasos para resolver dudas iniciales."
  }
]

export default function Proceso() {
  return (
    <section className="py-28 px-6 bg-gray-50 text-[#1a1a1f]">

      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Cómo trabajo
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Te acompañamos desde el diagnóstico hasta la entrega, con etapas claras y decisiones explicadas sin tecnicismos innecesarios.
        </p>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 max-w-6xl mx-auto">
        {pasos.map((paso, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md h-full">

              <div className="mb-4 text-3xl font-bold text-[#0f766e]">
                {i + 1}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {paso.titulo}
              </h3>

              <p className="text-gray-600">
                {paso.desc}
              </p>

            </div>
          </FadeInSection>
        ))}
      </div>

    </section>
  )
}
