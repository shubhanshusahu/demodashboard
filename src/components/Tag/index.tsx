import React from 'react'

const Tag = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined } ) => {
  return (
<span className='tag'>
{props.text}
</span>
  )
}

export default Tag
