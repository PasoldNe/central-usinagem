/** Único lugar para editar os dados comerciais. Exemplos dos mockups não são fatos confirmados. */
export const PENDING = 'A COMBINAR'

export const company = {
  name: 'CENTRAL USINAGEM',
  whatsapp: PENDING, // Somente dígitos, incluindo DDI e DDD, quando confirmado.
  email: PENDING,
  phone: PENDING,
  city: PENDING,
  address: PENDING,
  district: PENDING,
  state: PENDING,
  postalCode: PENDING,
  businessDays: PENDING,
  businessHours: PENDING,
  googleMapsUrl: PENDING,
  appleMapsUrl: PENDING,
  precision: PENDING,
  inspection: PENDING,
  experience: PENDING,
  deliveredProjects: PENDING,
}

export const services = [
  { id: 'torneamento', icon: 'turning', title: 'Torneamento CNC', description: 'Peças cilíndricas de alta precisão,\ncom excelente acabamento superficial\ne repetibilidade.' },
  { id: 'fresamento', icon: 'milling', title: 'Fresamento CNC', description: 'Geometrias complexas, cavidades\ne superfícies com alta precisão\ndimensional.' },
  { id: 'solda', icon: 'welding', title: 'Solda e montagem', description: 'Conjuntos soldados e montagens\ntécnicas com total rastreabilidade\ne padrão de qualidade.' },
  { id: 'prototipos', icon: 'cube', title: 'Desenvolvimento de protótipos', description: 'Do conceito à peça funcional,\ncom agilidade, suporte técnico\ne foco em viabilidade de produção.' },
  { id: 'lotes', icon: 'cubes', title: 'Lotes seriados', description: 'Produção em escala com\npadronização, controle de qualidade\ne alta repetibilidade.' },
  { id: 'controle', icon: 'caliper', title: 'Controle dimensional', description: 'Inspeção completa com equipamentos\nde medição de alta precisão e relatórios\ntécnicos.' },
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
