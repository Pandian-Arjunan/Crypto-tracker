import React, { useState } from 'react'
import './stylle.css'
import { grey } from '@mui/material/colors'

const CoinInfo = ({ heading, desc}) => {
  const shortDesc = desc.slice(0, 350) + "<p style='color:Var(--grey)'> Read More...</p>"
  const longDesc = desc + "<p style='color:Var(--grey)'> Read Less...</p>"  ;
  
const [flag, setFlag] = useState(false)

    return (
    <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
<h2 className='coin-info-heading'>{heading}</h2>
{desc.length > 200 ? <p 
onClick={()=>setFlag(!flag)}
className='coin-info-desc' dangerouslySetInnerHTML={{__html:!flag ?shortDesc : longDesc}}/> : 
<p
dangerouslySetInnerHTML={{__html:desc}}
/>}
    </div>
  )
}

export default CoinInfo