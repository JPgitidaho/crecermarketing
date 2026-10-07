import FadeInSection from "./FadeInSection"
import { Briefcase, BarChart3, Layout, Code } from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  {
    icon: <Briefcase className="w-10 h-10 text-[#0f766e]" />,
    title: "Desarrollo web para empresas",
    desc: "Creamos páginas web profesionales para presentar tus servicios con claridad y facilitar que tus clientes encuentren cómo contactarte.",
    href: "/desarrollo-web-rancagua",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#0f766e]" />,
    title: "SEO y posicionamiento web",
    desc: "Revisamos la estructura y el contenido para que los buscadores entiendan cada página. Para empresas de la zona, consideramos búsquedas locales en Rancagua."
  },
  {
    icon: <Code className="w-10 h-10 text-[#0f766e]" />,
    title: "Auditoría web",
    desc: "Revisamos tu sitio para detectar problemas de contenido, estructura y experiencia, y priorizamos mejoras concretas según tu negocio."
  },
  {
    icon: <Layout className="w-10 h-10 text-[#0f766e]" />,
    title: "Soluciones digitales para empresas",
    desc: "Desarrollamos herramientas y mejoras web ajustadas a una necesidad concreta, como organizar información o simplificar una tarea del negocio."
  }
]

function Services() {
  return (
    <section id="servicios" className="py-28 bg-white text-[#1a1a1f] px-6">
      
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Servicios web para empresas y pymes
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto text-gray-600">
          Desarrollo web como servicio principal, acompañado de SEO, auditoría y soluciones digitales según las necesidades de cada empresa.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <FadeInSection delay={0.1 * i} key={i}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#99f6e4] hover:shadow-xl">
              <div>{item.icon}</div>
              <h3 className="mt-4 text-2xl font-bold">
                {item.href ? (
                  <Link to={item.href} className="hover:text-[#0f766e]">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

export default Services
