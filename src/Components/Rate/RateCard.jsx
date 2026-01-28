import { useState } from "react"
import { motion, AnimatePresence } from "motion/react";


export const RateCard = ({header, text, oldPrice, newPrice, imgSrc}) => {

    const [activeR, setActiveR] = useState(true);

    return (
        <div className="h-100 bg-white mb-5" style={{maxWidth: '75%'}}>
            <h3 className="w-100 responsive-text-m header-font text-uppercase text-white py-4" style={{backgroundColor: '#496F91'}}>
                {header}
            </h3>
            <img src={imgSrc} className="col-10 mt-3 px-2"/>
            <ul className="responsive-text text-left px-5 mb-5">
                <li className="mb-2">{text[1]}</li>
                <li className="mb-2">{text[2]}</li>
                <li className={text[4] ? "mb-2" : null}>{header === 'VIP' ? text[3] : <s>{text[3]}</s>}</li>
                {text[4] ? <li>💰 {text[4]}</li> : null}
            </ul>
            
                <div className="responsive-text-m blue">
                    <AnimatePresence initial={false} mode="wait">
                        {activeR ? 
                        <motion.p 
                            className="responsive-text-m blue"
                            initial={{ opacity: 0.5, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            key='oldRub'
                        >
                            <s>{oldPrice + '₽'}</s>
                        </motion.p> : 
                        <motion.p 
                            className="responsive-text-m blue"
                            initial={{ opacity: 0.5, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            key='oldDol'
                        >
                                <s>{(Number(oldPrice.replace(/[^0-9]/g, '')) / 70).toFixed(2) + '$'}</s>
                        </motion.p>}
                        {activeR ? <motion.p 
                            className="responsive-header blue mb-5"
                            initial={{ opacity: 0.5, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            key='newRub'
                        >
                            <b>{newPrice + '₽'}</b></motion.p> : <motion.p 
                            className="responsive-header blue mb-5"
                            initial={{ opacity: 0.5, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            key='newDol'
                        >
                            <b>{(Number(newPrice.replace(/[^0-9]/g, '')) / 70).toFixed(2) + '$'}</b> 
                        </motion.p>}
                        
                    </AnimatePresence>
                </div>
            
            
            <div className="d-flex col-12 justify-content-center responsive-text-m">
                <p
                    onClick={()=>setActiveR(!activeR)}
                    className="col-2 text-white text-center p-0 rounded"
                    style={{backgroundColor: activeR ? '#d68c67' : '#ffd6b6', cursor: activeR ? '' : 'pointer', pointerEvents: activeR ? 'none' : 'visible'}}
                >₽</p>
                <div style={{width: '1vw'}}/>
                <p 
                    onClick={()=>setActiveR(!activeR)}
                    className="col-2 text-white text-center p-0 rounded" 
                    style={{backgroundColor: !activeR ? '#d68c67' : '#ffd6b6', cursor: !activeR ? '' : 'pointer', pointerEvents: !activeR ? 'none' : 'visible'}}
                >$</p>
            </div>
            <button className='btn btn-bg col-10 text-uppercase text-white responsive-text my-5 py-3'>
                Принять участие
            </button>
        </div>
    )
}