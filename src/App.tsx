import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Copy, Menu, Moon, Sun, X } from 'lucide-react'
import { company, machines, PENDING, services } from './content'
import { TechnicalIcon } from './components/TechnicalIcon'

type Panel = { kind: 'contact' | 'location' | 'service'; title: string; description?: string }

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M27 15.5A11.5 11.5 0 0 1 9.7 25.4L4 27l1.6-5.6A11.5 11.5 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2" /><path d="M12 9.5c-.5-1-1.3-1-1.9-.5-1.2 1-1.4 3-.4 5.1 1.4 3 4.2 5.5 7.4 6.5 2.3.8 4 .2 4.6-1 .3-.7.1-1.1-.4-1.4l-2.6-1.3c-.4-.2-.7-.1-1 .3l-1 1c-1.7-.7-3.8-2.4-4.6-4l.8-1.2c.3-.4.3-.7.1-1.1L12 9.5Z" fill="currentColor" /></svg>
}

function AppleIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 2c.1 1.4-.5 2.5-1.3 3.3-.8.8-1.9 1.4-3.1 1.3-.2-1.2.5-2.4 1.2-3.1.8-.8 2.1-1.4 3.2-1.5ZM20.1 17.5c-.5 1.1-.8 1.6-1.5 2.6-.9 1.3-2.1 2.9-3.6 2.9-1.3 0-1.7-.9-3.5-.9s-2.3.9-3.5.9c-1.4 0-2.5-1.4-3.4-2.7C2.2 16.8 2 12.6 3.5 10.4c1.1-1.6 2.8-2.5 4.4-2.5 1.5 0 2.5.9 3.6.9 1.1 0 2.1-.9 3.8-.9 1.4 0 2.9.8 4 2-3.5 2-2.9 6.6.8 7.6Z" /></svg>
}

function ContactDialog({ panel, onClose, onContact }: { panel: Panel; onClose: () => void; onContact: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [request, setRequest] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current!
    const previousFocus = document.activeElement as HTMLElement | null
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(`Solicitação de orçamento — CENTRAL USINAGEM\n\n${request}`)
      setCopied(true)
      setCopyError(false)
    } catch {
      setCopyError(true)
    }
  }

  return <dialog ref={dialogRef} className="detail-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="dialog-title">
    <button className="dialog-close icon-button" onClick={onClose} aria-label="Fechar"><X /></button>
    <Eyebrow>{panel.kind === 'location' ? 'NOSSA LOCALIZAÇÃO' : 'VAMOS CONVERSAR'}</Eyebrow>
    <h2 id="dialog-title">{panel.title}</h2>
    {panel.kind === 'service' ? <>
      <p>{panel.description}</p>
      <div className="dialog-info"><span>Prazos, materiais e capacidade</span><strong>{PENDING}</strong></div>
      <button className="button primary" onClick={onContact}>Solicitar orçamento <ArrowRight /></button>
    </> : panel.kind === 'location' ? <>
      <p>Endereço e canais de localização</p>
      <div className="dialog-info"><span>Endereço</span><strong>{company.address}</strong><span>Cidade / Estado</span><strong>{company.city} / {company.state}</strong><span>CEP</span><strong>{company.postalCode}</strong></div>
    </> : <>
      <p>Peças técnicas, protótipos ou produção em série. Conte sobre o seu projeto.</p>
      <div className="contact-channels">
        <div><span>WhatsApp</span><strong>{company.whatsapp}</strong></div>
        <div><span>E-mail</span><strong>{company.email}</strong></div>
      </div>
      <label htmlFor="project-request">Sua solicitação</label>
      <textarea id="project-request" rows={4} value={request} onChange={event => { setRequest(event.target.value); setCopied(false) }} placeholder="Descreva a peça, material, quantidade e prazo desejado." />
      <button className="button primary" disabled={!request.trim()} onClick={copyRequest}>{copied ? 'Solicitação copiada' : 'Copiar solicitação'}{copied ? <Check /> : <Copy />}</button>
      <p className="contact-note" role="status">{copyError ? 'Não foi possível copiar. Selecione e copie o texto acima.' : copied ? 'Texto copiado. O contato comercial está A COMBINAR; a solicitação ainda não foi enviada.' : 'O contato comercial está A COMBINAR. Você pode preparar e copiar sua solicitação.'}</p>
    </>}
  </dialog>
}

export default function App() {
  const [panel, setPanel] = useState<Panel | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [compact, setCompact] = useState(false)
  const [light, setLight] = useState(() => localStorage.getItem('central-usinagem-theme') === 'light')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
      const machinesSection = document.getElementById('maquinas')
      setCompact(Boolean(machinesSection && window.scrollY >= machinesSection.offsetTop - 160))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
    localStorage.setItem('central-usinagem-theme', light ? 'light' : 'dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f0f3f7' : '#080e15')
  }, [light])

  const contact = () => { setMenuOpen(false); setPanel({ kind: 'contact', title: 'Seu projeto começa aqui.' }) }
  const whatsapp = () => {
    if (/^\d{10,15}$/.test(company.whatsapp)) window.open(`https://wa.me/${company.whatsapp}`, '_blank', 'noopener,noreferrer')
    else contact()
  }
  const maps = (url: string) => {
    if (/^https:\/\//.test(url)) window.open(url, '_blank', 'noopener,noreferrer')
    else setPanel({ kind: 'location', title: 'Localização A COMBINAR.' })
  }

  return <>
    <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
    <header className={`site-header${scrolled ? ' scrolled' : ''}${compact ? ' compact' : ''}`}>
      <a className="wordmark" href="#inicio" aria-label="Central Usinagem — início"><strong>CENTRAL</strong><span>USINAGEM</span></a>
      <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar navegação' : 'Abrir navegação'} aria-expanded={menuOpen} aria-controls="navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
        <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#capacidade" onClick={() => setMenuOpen(false)}>Capacidade</a>
        <a href="#maquinas" onClick={() => setMenuOpen(false)}>Máquinas</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
    </header>

    <main>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-art" role="img" aria-label="Flange de aço usinado com acabamento de precisão e desenho técnico dimensional" />
        <div className="hero-content">
          <Eyebrow>USINAGEM DE ALTA PRECISÃO</Eyebrow>
          <h1 id="hero-title"><span>Precisão industrial</span><span className="soft-title">para um futuro</span><span className="blue">mais eficiente.</span></h1>
          <p className="hero-description">Soluções em usinagem de precisão para peças técnicas,<br className="desktop-break" /> protótipos e produção em série, com qualidade, agilidade<br className="desktop-break" /> e confiabilidade.</p>
          <div className="hero-actions"><button className="button primary" onClick={contact}>Solicitar orçamento <ArrowRight /></button><button className="button secondary" onClick={contact}>Falar com especialista</button></div>
          <div className="hero-indicators">
            <div><TechnicalIcon name="crosshair" /><span>ALTA<br />PRECISÃO</span></div>
            <div><TechnicalIcon name="shield" /><span>QUALIDADE<br />COMPROVADA</span></div>
            <div><TechnicalIcon name="chart" /><span>DO PROTÓTIPO<br />À GRANDE SÉRIE</span></div>
          </div>
        </div>
      </section>

      <section className="authority-services section-wide" aria-label="Qualidade e serviços">
        <div id="capacidade" className="authority">
          <div className="authority-intro">
            <Eyebrow>RESULTADOS QUE GERAM CONFIANÇA</Eyebrow>
            <h2><span className="quality-title">Qualidade</span><br /><span className="soft-title">comprovada</span><br /><span className="blue">em números.</span></h2>
            <p>{'Processos robustos, equipamentos de alta precisão\ne uma equipe técnica experiente para entregar\nresultados consistentes do protótipo à grande série.'}</p>
          </div>
          <div className="authority-data">
            <div className="main-metrics">
              <div className="metric"><h3>PRECISÃO DIMENSIONAL</h3><strong className={company.precision === PENDING ? 'pending-metric' : ''}>{company.precision}</strong><p>Tolerâncias estreitas para peças<br className="desktop-break" /> técnicas e alto desempenho.</p></div>
              <div className="metric"><h3>INSPEÇÃO DE QUALIDADE</h3><strong className={company.inspection === PENDING ? 'pending-metric' : ''}>{company.inspection}</strong><p>Das peças inspecionadas com<br className="desktop-break" /> equipamentos de medição certificados.</p></div>
            </div>
            <div className="secondary-metrics">
              <div><TechnicalIcon name="cog" /><div><div className="secondary-metric-value"><strong>{company.experience}</strong><span>ANOS<br />DE EXPERIÊNCIA</span></div><p>Conhecimento técnico a serviço do seu projeto.</p></div></div>
              <div><TechnicalIcon name="factory" /><div><div className="secondary-metric-value"><strong>{company.deliveredProjects}</strong><span>PROJETOS<br />ENTREGUES</span></div><p>Do protótipo à produção em série.</p></div></div>
            </div>
          </div>
        </div>
        <div id="servicos" className="services">
          <div className="services-heading"><Eyebrow>NOSSOS SERVIÇOS</Eyebrow><h2>Soluções completas <span className="soft-title">em usinagem e fabricação.</span></h2></div>
          <div className="service-grid">{services.map(service => <button key={service.id} className="service-card" onClick={() => setPanel({ kind: 'service', title: service.title, description: service.description })}>
            <TechnicalIcon name={service.icon} className="service-icon" /><div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div><span className="card-arrow"><ArrowRight /></span>
          </button>)}</div>
        </div>
      </section>

      <section className="machines-location section-narrow" aria-label="Estrutura e localização">
        <div id="maquinas" className="machines">
          <div className="machines-heading"><div><Eyebrow>NOSSO PARQUE DE MÁQUINAS</Eyebrow><h2>Equipamentos de alta performance<br />para <span className="blue">resultados consistentes.</span></h2></div><p>Contamos com máquinas de última geração para atender projetos de alta complexidade, com precisão, agilidade e confiabilidade.</p></div>
          <div className="machine-grid">{machines.map(machine => <article className="machine-card" key={machine.id}>
            <div className={`machine-photo ${machine.id}`} role="img" aria-label={`Imagem ilustrativa de ${machine.title}, conforme o mockup fornecido`} />
            <div className="machine-copy"><h3>{machine.title}</h3><p>{machine.description}</p><div className="machine-specs">{machine.specs.map(spec => <div key={spec.label}><TechnicalIcon name={spec.icon} /><div><strong>{spec.value}</strong><span>{spec.label}</span></div></div>)}</div></div>
          </article>)}</div>
        </div>
        <div id="contato" className="location">
          <div className="location-copy"><Eyebrow>LOCALIZAÇÃO</Eyebrow><h2>Estamos em<br /><span className="blue">{company.city}.</span></h2><p>Nossa estrutura está localizada em um polo estratégico, com fácil acesso às principais vias e atendimento a clientes de todo o Brasil.</p><div className="location-details"><div><TechnicalIcon name="pin" /><div><strong>{company.address}</strong><span>{company.district} — {company.city} / {company.state}<br />CEP {company.postalCode}</span></div></div><div><TechnicalIcon name="clock" /><div><strong>Horário de atendimento</strong><span>{company.businessDays}<br />{company.businessHours}</span></div></div></div></div>
          <div className="map-panel" aria-label="Mapa ilustrativo. Localização da Central Usinagem A COMBINAR.">
            <div className="map-art" aria-hidden="true" />
            <div className="map-source-mask" aria-hidden="true" />
            <span className="map-route first">A COMBINAR</span><span className="map-route second">A COMBINAR</span>
            <div className="map-road"><span>LOCALIZAÇÃO</span><strong>{PENDING}</strong></div>
            <div className="map-marker"><TechnicalIcon name="pin" /><span><strong>CENTRAL</strong> USINAGEM</span></div>
            <div className="map-city">{company.city}</div>
            <div className="map-actions"><button className="button primary" onClick={() => maps(company.googleMapsUrl)}><TechnicalIcon name="pin" />Google Maps<ArrowRight /></button><button className="button secondary" onClick={() => maps(company.appleMapsUrl)}><AppleIcon />Apple Maps<ArrowRight /></button></div>
          </div>
        </div>
      </section>
    </main>

    <div className={`floating-actions${compact ? ' visible' : ''}`}><button className="theme-toggle icon-button" onClick={() => setLight(!light)} aria-label={light ? 'Ativar modo escuro' : 'Ativar modo claro'} title={light ? 'Modo escuro' : 'Modo claro'}>{light ? <Moon /> : <Sun />}</button><button className="whatsapp-button" onClick={whatsapp} aria-label="Falar com a Central Usinagem pelo WhatsApp"><WhatsAppIcon /></button></div>
    {panel && <ContactDialog key={panel.kind + panel.title} panel={panel} onClose={() => setPanel(null)} onContact={contact} />}
  </>
}
