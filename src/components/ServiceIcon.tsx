import {
  Building2,
  Layers,
  Users,
  HeartHandshake,
  Megaphone,
  Landmark,
  ShieldAlert,
  Cpu,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  building2: Building2,
  layers: Layers,
  users: Users,
  heartHandshake: HeartHandshake,
  megaphone: Megaphone,
  landmark: Landmark,
  shieldAlert: ShieldAlert,
  cpu: Cpu,
}

type ServiceIconProps = {
  name: string
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

/**
 * ServiceIcon
 * ---------------------------------------------------------------------------
 * Resolves the string `icon` key stored in content.ts to a Lucide component.
 * This keeps the data file serializable and the component layer free of
 * hardcoded copy, while using a consistent thin-line icon set.
 */
export default function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Building2
  return <Icon {...props} aria-hidden="true" strokeWidth={1.5} />
}