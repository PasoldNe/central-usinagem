/** Dados comerciais informados pelo responsável. Especificações ainda não confirmadas permanecem pendentes. */
export const PENDING = 'A COMBINAR'

const mapSearchAddress = 'Rua XV de Novembro, 8350, Testo Central, Pomerode, SC, 89107-000, Brasil'

export const company = {
  name: 'Central Usinagem',
  whatsapp: '554791638538', // Número informado, sem acrescentar um nono dígito por suposição.
  whatsappNeedsConfirmation: true,
  email: 'centralusinagem8350@gmail.com',
  phone: '554791638538',
  phoneDisplay: '+55 47 9163-8538',
  city: 'Pomerode',
  address: 'Rua XV de Novembro, 8350',
  district: 'Testo Central',
  state: 'SC',
  postalCode: '89107-000',
  businessDays: 'Segunda a sexta-feira',
  businessHours: '7h15 às 17h30',
  businessBreak: '11h30 às 12h30',
  visitMessage: 'Pode vir nos visitar',
  visitPolicy: 'Visitas sem agendamento, durante o horário de atendimento.',
  regionalFocus: 'Atendimento regional',
  serviceArea: 'Pomerode, Jaraguá do Sul, Blumenau, Timbó e arredores.',
  remoteService: 'Regiões mais distantes e outros estados mediante avaliação prévia.',
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearchAddress)}`,
  appleMapsUrl: `https://maps.apple.com/?q=${encodeURIComponent(mapSearchAddress)}`,
  mapsVerified: false, // Links de busca por endereço; não representam um ponto geográfico verificado.
  precision: PENDING,
  experience: '10+',
  experienceLabel: 'Anos de experiência da equipe',
  companyAge: 'Cerca de 7 anos',
  deliveredProjects: PENDING,
}

export const services = [
  {
    id: 'torneamento', icon: 'turning', title: 'Torneamento CNC',
    description: 'Usinagem de peças cilíndricas\ne componentes com geometrias\nrotacionais.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
  {
    id: 'fresamento', icon: 'milling', title: 'Fresamento CNC',
    description: 'Usinagem de superfícies, cavidades\ne geometrias para diferentes\naplicações técnicas.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
  {
    id: 'solda', icon: 'welding', title: 'Solda e montagem',
    description: 'Fabricação de conjuntos soldados\ne montagens técnicas conforme\nas necessidades do projeto.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
  {
    id: 'prototipos', icon: 'cube', title: 'Desenvolvimento de protótipos',
    description: 'Desenvolvimento e fabricação\nde protótipos para transformar\nideias em peças funcionais.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
  {
    id: 'lotes', icon: 'cubes', title: 'Lotes seriados',
    description: 'Fabricação de peças em lotes,\ncom quantidades e condições\ndefinidas para cada projeto.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
  {
    id: 'controle', icon: 'caliper', title: 'Controle dimensional',
    description: 'Verificação dimensional de peças\nconforme os requisitos definidos\npara cada projeto.',
    materials: PENDING, capacity: PENDING, leadTime: PENDING,
  },
] as const

export const machines = [
  {
    id: 'machining', title: 'Centro de usinagem CNC',
    description: 'Alta precisão e versatilidade para peças complexas e diferentes aplicações.',
    specs: [
      { icon: 'cog', value: PENDING, label: 'CONFIGURAÇÃO' },
      { icon: 'crosshair', value: PENDING, label: 'CURSO (X Y Z)' },
      { icon: 'layers', value: PENDING, label: 'PRECISÃO' },
    ],
  },
  {
    id: 'lathe', title: 'Torno CNC',
    description: 'Usinagem de alta precisão para peças com geometrias rotacionais.',
    specs: [
      { icon: 'diameter', value: PENDING, label: 'DIÂMETRO MÁX.' },
      { icon: 'horizontal', value: PENDING, label: 'COMPRIMENTO MÁX.' },
      { icon: 'crosshair', value: PENDING, label: 'PRECISÃO' },
    ],
  },
  {
    id: 'radial', title: 'Furadeira radial',
    description: 'Robustez e agilidade para operações de furação em grandes dimensões.',
    specs: [
      { icon: 'diameter', value: PENDING, label: 'CAPACIDADE' },
      { icon: 'vertical', value: PENDING, label: 'ALCANCE DO BRAÇO' },
      { icon: 'table', value: PENDING, label: 'MESA DE TRABALHO' },
    ],
  },
]
