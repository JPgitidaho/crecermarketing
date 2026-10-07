import FadeInSection from "./FadeInSection"

const preguntas = [
  {
    pregunta: "¿Qué servicios ofrece Crecer Marketing?",
    respuesta:
      "Desarrollo web, SEO local, auditoría web y soluciones digitales para empresas y pymes.",
  },
  {
    pregunta: "¿Trabajan solo en Rancagua?",
    respuesta:
      "Atendemos empresas de Rancagua y la Región de O’Higgins, además de proyectos de otras zonas de Chile.",
  },
  {
    pregunta: "¿Cómo comienza un proyecto?",
    respuesta:
      "Comenzamos con un diagnóstico para entender tus objetivos y definir una propuesta de trabajo.",
  },
  {
    pregunta: "¿Pueden ayudarme si ya tengo una página web?",
    respuesta:
      "Sí. Podemos revisar tu sitio y conversar sobre las mejoras o soluciones que podrían ser útiles.",
  },
  {
    pregunta: "¿Qué necesito para solicitar un diagnóstico?",
    respuesta:
      "Cuéntanos brevemente sobre tu empresa, qué necesitas y cómo podemos contactarte. Con eso iniciamos la conversación.",
  },
]

export default function PreguntasFrecuentes() {
  return (
    <section className="bg-gray-50 px-6 py-24 text-[#1a1a1f]">
      <div className="mx-auto max-w-4xl">
        <FadeInSection>
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Preguntas frecuentes
          </h2>
        </FadeInSection>

        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {preguntas.map(({ pregunta, respuesta }) => (
            <details key={pregunta} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                {pregunta}
              </summary>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600">{respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}