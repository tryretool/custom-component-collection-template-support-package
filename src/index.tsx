import { type FC } from 'react'

import { useRetoolState } from '@tryretool/custom-component-support'

export const HelloWorld: FC = () => {
  const [name, setName] = useRetoolState('name', '')

  return (
    <div>
      <div>Hello {name}!</div>
    </div>
  )
}
