import React from 'react'
import "./styles.css"
import Button from '../../Common/Button'
import iphone from "../../../Assets/iphone.png"
import {motion} from "framer-motion"
function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 
            className='track-crypto-heading'
            initial = {{opacity : 0 , x : 50}}
            animate = {{opacity:1 , x:0}}
            transition = {{duration : 0.5}}
            >Track Crypto</motion.h1>
            <motion.h1 
            className='real-time-heading'
            initial = {{opacity : 0 , x : -50}}
            animate = {{opacity:1 , x:0}}
            transition = {{duration : 0.5 , delay: 0.5}}
            >Real Time.</motion.h1>
            <motion.p 
            className='info-text'
            initial = {{opacity : 0}}
            animate = {{opacity:1}}
            transition = {{duration : 0.5 , delay: 1}}
            >Gather live data on all crypto-currencies in real time.</motion.p>
            <motion.div 
            className='btn-flex'
            initial = {{opacity : 0}}
            animate = {{opacity:1}}
            transition = {{duration : 0.5 , delay: 1}}
            >
                <Button outlined={false} text={"Dashboard"} />
                <Button outlined={true} text={"Share"} />
            </motion.div>
        </div>
        <motion.div className='phone-container'
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        >
            <img src={iphone} className='iphone'></img>
        </motion.div>
    </div>
  )
}

export default MainComponent