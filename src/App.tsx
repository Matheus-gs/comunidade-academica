import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { LinkCard } from "./components/LinkCard"

export default function App() {
  const linkList = [
    {
      id: 0,
      label: 'Agenda de Eventos',
      href: 'https://google.com/search?q=eventos+do+udf'
    },
    {
      id: 1,
      label: 'Notificações',
      href: 'https://google.com/search?q=notificacoes+udf'
    },
    {
      id: 2,
      label: 'Espaço para Networking',
      href: 'https://google.com/search?q=networking+udf'
    },
    {
      id: 3,
      label: 'Recursos Educacionais',
      href: 'https://google.com/search?q=recursos+udf'
    },
    {
      id: 4,
      label: 'Lorem',
      href: 'https://google.com/search?q=projetos+udf'
    },
    {
      id: 5,
      label: 'Ipsum',
      href: 'https://google.com/search?q=projetos+udf'
    },
    {
      id: 6,
      label: 'Dolor',
      href: 'https://google.com/search?q=projetos+udf'
    },
    {
      id: 7,
      label: 'Sem ideia',
      href: 'https://google.com/search?q=projetos+udf'
    },

  ]

  const links = linkList.map(link => (
    <LinkCard key={link.id} label={link.label} href={link.href}/>
  ))

  return (
    <div className="grid place-content-center w-full min-h-screen h-full bg-black relative">
      <div className="flex flex-col w-full max-w-72">
        <Header />
        <div className="w-full flex gap-3 flex-wrap p-4 overflow-y-auto">
          {links}
        </div>
      </div>
      <Footer />
    </div>
  )
}

