import React, { useState } from 'react'
import "./styles.css"
function CoinInfo({heading , desc}) {
   const shortDesc =
    desc.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  const [toggle, setToggle] = useState(false);


  return (
    <div className='grey-wrapper'>
      <h2>{heading}</h2>
      <p className='coin-info-desc' 
       onClick={() => setToggle(!toggle)}
      dangerouslySetInnerHTML={{ __html : !toggle? shortDesc : longDesc}} />
      </div>
  )
}

export default CoinInfo