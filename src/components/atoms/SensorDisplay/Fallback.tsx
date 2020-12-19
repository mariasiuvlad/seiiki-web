import {Loader} from 'icons'

export default function SensorDisplayFallback() {
  return (
    <div className="flex flex-col border border-gray-200 dark:border-gray-600 border-b-0">
      <Loader className="w-16 h-16 fill-current" />
    </div>
  )
}
