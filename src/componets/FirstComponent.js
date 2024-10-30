import React from 'react'
import { SecondComponet } from './SecondComponet'

export default function FirstComponent({age}) {

  const getName = (county) => {
    console.log('Hello-', county);
  }

  return (
    <div>
      First Component - {age}
      <SecondComponet age={age} getName={getName} />
    </div>
  )
}

