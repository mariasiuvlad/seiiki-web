import * as icons from '@heroicons/react/solid'

export type IconType = keyof typeof icons
export type IconProps = {name: IconType; className?: string}

const Icon: React.FC<IconProps> = ({className, name, ...rest}) => {
  const IconComponent = icons[name]

  return <IconComponent className={className} {...rest} />
}

export default Icon
