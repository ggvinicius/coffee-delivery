import { IconProps } from '@phosphor-icons/react'
import { HeroFeature } from './styles'

interface HeroFeatureItemProps {
  Icon: React.ElementType<IconProps>;
  label: string;
  backgroundColorFeature: 'yellow' | 'yellow-dark' | 'purple' | 'base-text'
}

export function HeroFeatureItem({
  Icon,
  label,
  backgroundColorFeature }: HeroFeatureItemProps) {
  return (
    <HeroFeature $backgroundColor={backgroundColorFeature}>
      <div>
        <Icon size={16} weight="fill" />
      </div>
      {label}
    </HeroFeature>
  )
}
