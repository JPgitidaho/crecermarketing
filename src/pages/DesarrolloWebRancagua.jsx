import { Link } from "react-router-dom"
import SEOTags from "../components/SEOTags"
import Navbar from "../components/Navbar"
import FadeInSection from "../components/FadeInSection"
import Proyectos from "../components/Proyectos"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { DEFAULT_OG_IMAGE } from "../config/site"

const pageUrl = "https://crecerwebymarketing.cl/desarrollo-web-rancagua"

const includes = [
  {
    title: "Diseño adaptable a celulares",
    description: "El contenido se ajusta a teléfonos, tablets y computadores.",
  },
  {
    title: "Estructura profesional",
    description: "Organizamos las páginas para presentar tu empresa y sus servicios con claridad.",
  },
  {
    title: "Navegación clara",
    description: "Ayudamos a que las personas encuentren fácilmente la información que buscan.",
  },
  {
    title: "Formularios de contacto",
    description: "Incluimos una forma sencilla para que potenciales clientes consulten por tus servicios.",
  },
  {
    title: "Acceso a WhatsApp",
    description: "Facilitamos el inicio de una conversación desde el sitio web.",
  },
  {
    title: "SEO técnico básico",
    description: "Consideramos títulos, descripciones y una estructura que ayude a los buscadores a entender el contenido.",
  },
  {
    title: "Velocidad y rendimiento",
    description: "Cuidamos que las páginas carguen de forma eficiente y funcionen correctamente.",
  },
  {
    title: "Dominio y publicación",
    description: "Te acompañamos con la configuración del dominio y dejamos el sitio publicado.",
  },
]

const siteTypes = [
  {
    title: "Sitio web corporativo",
    description: "Para presentar una empresa, sus áreas y su información institucional.",
  },
  {
    title: "Web para empresa de servicios",
    description: "Para explicar qué haces, a quién atiendes y cómo solicitar información.",
  },
  {
    title: "Landing page",
    description: "Una página enfocada en un servicio, una campaña o una necesidad concreta.",
  },
  {
    title: "Rediseño web",
    description: "Para actualizar y reorganizar un sitio existente según las necesidades actuales del negocio.",
  },
]

const steps = [
  ["Diagnóstico", "Conversamos sobre tu negocio, tus objetivos y lo que necesitas resolver."],
  ["Propuesta", "Definimos el alcance del proyecto y los próximos pasos."],
  ["Estructura", "Ordenamos las páginas y la información que verá cada visitante."],
  ["Desarrollo", "Diseñamos y construimos el sitio según lo acordado."],
  ["Revisión", "Revisamos el contenido y el funcionamiento antes de publicar."],
  ["Publicación", "Conectamos el dominio y dejamos el sitio disponible en internet."],
  ["Seguimiento inicial", "Acompañamos los primeros pasos y resolvemos dudas de la entrega."],
]

const reasons = [
  "Comunicación clara durante cada etapa del proyecto.",
  "Soluciones pensadas para las necesidades de tu empresa.",
  "Diseño profesional y navegación fácil de entender.",
  "Estructura web orientada a facilitar consultas y contactos.",
  "SEO técnico básico considerado desde el desarrollo, sin prometer posiciones en buscadores.",
  "Acompañamiento desde la planificación hasta la entrega.",
]

const questions = [
  {
    question: "¿Cuánto demora desarrollar una página web?",
    answer: "El tiempo depende del alcance, la cantidad de páginas y la disponibilidad del contenido. Revisamos estos puntos en el diagnóstico y acordamos un plazo para cada proyecto.",
  },
  {
    question: "¿Qué necesito entregar para comenzar?",
    answer: "Necesitaremos conocer tu empresa y sus servicios, además de los datos de contacto y los materiales que ya tengas, como logo, textos e imágenes. Te orientamos sobre lo que falte.",
  },
  {
    question: "¿Trabajas solamente con empresas de Rancagua?",
    answer: "Atiendo empresas y pymes de Rancagua y la Región de O’Higgins, y también puedo trabajar de forma remota con clientes de otras regiones de Chile.",
  },
  {
    question: "¿La página queda adaptada para celulares?",
    answer: "Sí. El diseño se adapta a celulares, tablets y computadores para facilitar la navegación desde distintos dispositivos.",
  },
  {
    question: "¿El desarrollo incluye SEO?",
    answer: "Incluye una base técnica inicial, con estructura clara y elementos como títulos y descripciones. Esto ayuda a que los buscadores entiendan el sitio, pero no garantiza posiciones ni resultados específicos.",
  },
  {
    question: "¿Puedo mejorar una página que ya tengo?",
    answer: "Sí. Revisamos el sitio actual y definimos si conviene mejorar su estructura, actualizar el diseño o desarrollar una nueva versión.",
  },
]

function DesarrolloWebRancagua() {
  return (
    <>
      <SEOTags
        title="Desarrollo Web en Rancagua para Empresas | Crecer Marketing"
        description="Desarrollo web profesional en Rancagua para empresas y pymes. Sitios claros, rápidos y optimizados para fortalecer tu presencia digital y facilitar nuevos contactos."
        canonical={pageUrl}
        image={DEFAULT_OG_IMAGE}
      />
      <Navbar />

      <main className="text-[#1a1a1f]">
        <section className="bg-[#0f172a] px-6 pb-24 pt-36 text-white">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Migas de pan" className="mb-8 text-sm text-slate-300">
              <Link to="/" className="underline-offset-4 hover:underline">Inicio</Link>
              <span aria-hidden="true"> / </span>
              <span>Desarrollo web en Rancagua</span>
            </nav>
            <FadeInSection>
              <div className="max-w-4xl">
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                  Desarrollo web profesional en Rancagua para empresas
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  Creamos sitios web claros, profesionales y rápidos para que tu empresa transmita confianza y facilite el contacto con potenciales clientes.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#0f172a] transition hover:bg-[#99f6e4]"
                >
                  Solicitar diagnóstico
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">¿Para quién es este servicio?</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
                Está pensado para empresas, pymes y profesionales que necesitan presentar sus servicios en internet, como negocios de construcción o limpieza, servicios técnicos y empresas locales.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Qué incluye el desarrollo web</h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
                Una base profesional para que tu sitio sea fácil de usar, mantener y entender.
              </p>
            </FadeInSection>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {includes.map((item) => (
                <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Tipos de sitios web</h2>
            </FadeInSection>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {siteTypes.map((item) => (
                <article key={item.title} className="border-l-4 border-[#0f766e] bg-gray-50 p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Desarrollo web en Rancagua y la Región de O’Higgins</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">
                Conocemos las necesidades de empresas y negocios locales que buscan explicar sus servicios y facilitar consultas desde su sitio. El trabajo también puede realizarse a distancia para clientes de otras regiones de Chile.
              </p>
              <p className="mt-4 text-slate-200">
                El SEO se considera como parte de una estructura web ordenada. Puedes leer más sobre <Link to="/blog/seo-rancagua" className="font-semibold text-white underline underline-offset-4">SEO local en Rancagua</Link> en nuestro blog.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Un proceso claro, de principio a fin</h2>
            </FadeInSection>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, description], index) => (
                <li key={title} className="rounded-xl border border-gray-200 p-6">
                  <p className="text-sm font-bold text-[#0f766e]">ETAPA {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <FadeInSection>
              <h2 className="text-3xl font-extrabold md:text-4xl">Por qué trabajar con Crecer Marketing</h2>
            </FadeInSection>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="border-b border-gray-200 pb-4 text-lg leading-7 text-gray-700">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Proyectos />

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <h2 className="text-center text-3xl font-extrabold md:text-4xl">Preguntas frecuentes</h2>
            </FadeInSection>
            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {questions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer text-lg font-semibold">{question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-extrabold md:text-4xl">Conversemos sobre la web de tu empresa</h2>
            <a
              href="#contacto"
              className="mt-6 inline-flex rounded-xl bg-[#0f766e] px-7 py-3 font-semibold text-white transition hover:bg-[#115e59]"
            >
              Solicitar diagnóstico
            </a>
          </FadeInSection>
        </section>

        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default DesarrolloWebRancagua