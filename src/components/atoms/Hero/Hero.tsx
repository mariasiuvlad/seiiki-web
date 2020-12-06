import {Alien, Rocket} from '../../../icons'

import style from './Hero.module.css'

export interface HeroProps {
  text: string
}

export default function Hero({text}: HeroProps) {
  return (
    <div className={style.root}>
      <h1 className="text-6xl tracking-tight">Heating is On</h1>
      <div className="flex flex-row mt-8">
        <Rocket className={style.icon} />
        <Alien className={style.icon} />
      </div>
    </div>
  )
}
