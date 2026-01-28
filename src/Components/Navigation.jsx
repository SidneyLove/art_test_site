import nav_icon from '../img/nav_icon.png'
import vk_icon from '../img/vk_icon.png'
import tg_icon from '../img/tg_icon.png'
import { motion } from 'framer-motion';
import { SmoothLink } from './SmoothLink';

export const Navigation = () => {

    return (
        <div className='d-flex justify-content-center container-fluid nav-shadow fixed-top p-0' style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <nav className="navbar responsive-text-nav">
                <div className="container row p-0">
                    <div className='col-2 col-md-1 text-center p-0'>
                        <img src={nav_icon} className='w-75' alt='Логотип'/>
                    </div>
                    
                    <div className='w-auto d-flex justify-content-center justify-content-md-between flex-column flex-md-row p-0'>
                        <SmoothLink href='#'><p className='border-bottom m-0'>О чем курс</p></SmoothLink>
                        <div className='d-none d-md-block' style={{width: '2rem'}}/>
                        <SmoothLink href='#rate'><p className='border-bottom m-0'>Записаться на курс</p></SmoothLink>
                        <div className='d-none d-md-block' style={{width: '2rem'}}/>
                        <SmoothLink href='#'><p className='border-bottom m-0'>Контакты</p></SmoothLink>
                    </div>
                    
                    <div className='col-3 d-flex justify-content-end row p-0'>
                        <motion.a 
                            href='#' 
                            className='col-6 col-md-3 text-center p-0'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img  src={vk_icon} className='w-75' alt='Логотип'/>
                        </motion.a>
                        <motion.a 
                            href='#' 
                            className='col-6 col-md-3 text-center p-0'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={tg_icon} className='w-75' alt='Логотип'/>
                        </motion.a>
                    </div>
                </div>
            </nav>
        </div>
        
        
    )
}