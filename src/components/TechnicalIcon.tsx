import { ArrowDownUp, Box, Boxes, ChartNoAxesColumnIncreasing, CircleSlash2, Clock3, Cog, Crosshair, Factory, Layers3, MapPin, MoveHorizontal, Shield, TableCellsSplit } from 'lucide-react'

export function TechnicalIcon({ name, className = '' }: { name: string; className?: string }) {
  const icons = { crosshair: Crosshair, shield: Shield, chart: ChartNoAxesColumnIncreasing, cog: Cog, factory: Factory, cube: Box, cubes: Boxes, layers: Layers3, diameter: CircleSlash2, horizontal: MoveHorizontal, vertical: ArrowDownUp, table: TableCellsSplit, pin: MapPin, clock: Clock3 }
  const Icon = icons[name as keyof typeof icons]
  if (Icon) return <Icon className={className} strokeWidth={1.35} aria-hidden="true" />

  return <svg className={className} viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'turning' && <>
      <ellipse cx="20" cy="36" rx="14" ry="21" /><ellipse cx="20" cy="36" rx="7" ry="15" />
      <path d="M20 15h21c8 0 14 9 14 21s-6 21-14 21H20M35 15c8 0 14 9 14 21s-6 21-14 21M53 23h9c5 0 8 5 8 13s-3 13-8 13h-9M62 23v26" />
    </>}
    {name === 'milling' && <>
      <path d="M25 6v15h22V6M27 21v14h18V21M33 35v14h10V35M29 49h18l3 7-7 8-6-5-6 5-8-4 6-11Z" />
      <path d="m31 50-5 10m13-10-5 11m12-7-5 8M24 6h24" />
    </>}
    {name === 'welding' && <>
      <path d="m31 40 9-16c6-11 15-17 23-20l6 4c-10 4-17 11-23 22l-7 14-8-4Z" />
      <path d="m31 40-6 13 5 3 9-12M6 69h48M23 65l-4-9 10 7 5-12 2 13 9-6-5 9M20 66l-8-3 6 6" />
    </>}
    {name === 'caliper' && <>
      <path d="m13 56 30-40 9 7-31 40-12 5 4-12Zm26-36-8-6-12 15 7 6M44 17l8-10 10 8-8 10M30 47l30 23 7-9-30-23M46 43l9-12 8 6-9 12M13 56l8 7" />
    </>}
  </svg>
}
