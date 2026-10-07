import FadeInSection from "./FadeInSection"

const preguntas = [
  {
    pregunta: "¿Cuánto demora desarrollar una página web?",
    respuesta:
      "El plazo depende del alcance, la cantidad de páginas y la disponibilidad del contenido. Se acuerda una estimación para cada proyecto antes de comenzar.",
  },
  {
    pregunta: "¿Qué información necesito entregar?",
    respuesta:
      "Ayuda contar con una descripción de la empresa y sus servicios, datos de contacto, logo e imágenes disponibles. Si falta material, definimos juntos qué se necesita preparar.",
  },
  {
    pregunta: "¿Trabajan solo en Rancagua?",
    respuesta:
      "La atención local se enfoca en Rancagua y la Región de O’Higgins, y también trabajamos a distancia con empresas de otras zonas de Chile.",
  },
  {
    pregunta: "¿Qué incluye el SEO inicial?",
    respuesta:
      "Considera ordenar la estructura del sitio y sus páginas, junto con elementos básicos como títulos y descripciones para buscadores. El alcance se define según el proyecto.",
  },
  {
    pregunta: "¿Pueden mejorar una página web existente?",
    respuesta:
      "Sí. Primero revisamos el sitio actual y sus necesidades para definir si conviene optimizarlo, reorganizarlo o rediseñarlo.",
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