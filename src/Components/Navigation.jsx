<<<<<<< HEAD
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
=======
import nav_icon from '../img/nav_icon.png'
import vk_icon from '../img/vk_icon.png'
import tg_icon from '../img/tg_icon.png'
import { motion } from 'framer-motion';
import { SmoothLink } from './SmoothLink';

export const Navigation = () => {

    const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

    return (
        <div className='d-flex justify-content-center container-fluid nav-shadow bg-white fixed-top'>
            <nav className="navbar responsive-text">
                <div className="container row p-0">
                    <div className='col-1 text-center p-0'>
                        <img src={nav_icon} className='w-75' alt='Логотип'/>
                    </div>
                    
                    <div className='col-8 d-flex justify-content-center justify-content-md-between row p-0'>
                        <SmoothLink href='#'><p className='border-bottom m-0'>О чем курс</p></SmoothLink>
                        <div style={{width: '0.5rem'}}/>
                        <SmoothLink href='#rate'><p className='border-bottom m-0'>Записаться на курс</p></SmoothLink>
                        <div style={{width: '0.5rem'}}/>
                        <SmoothLink href='#'><p className='border-bottom m-0'>Контакты</p></SmoothLink>
                    </div>
                    
                    <div className='col-3 d-flex justify-content-end row p-0'>
                        <motion.a 
                            href='#' 
                            className='col-6 col-md-4 text-center p-0'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img  src={vk_icon} className='w-50' alt='Логотип'/>
                        </motion.a>
                        <motion.a 
                            href='#' 
                            className='col-6 col-md-4 text-center p-0'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={tg_icon} className='w-50' alt='Логотип'/>
                        </motion.a>
                    </div>
                </div>
            </nav>
        </div>
        
        
    )
>>>>>>> 7603237923d99bbac572894bdcbb5260772bb522
}