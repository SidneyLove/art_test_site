import art from '../img/art_about_of_course.jpg';
import paints from '../img/1.png';
import brushes from '../img/2.png';
import paper from '../img/3.png';
import pencil from '../img/4.png';

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const AboutTheCourse = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className='container mt-5 pt-5' id='about_of_course'>
            <div className='d-flex align-items-center p-0'>
                <div className='col-7 px-2 py-2 border-el border-right-0 text-bg-about-course'>
                    <h2 className='responsive-header header-color text-uppercase header-font'>
                        Для кого будет полезен курс
                    </h2>
                    <p className='responsive-text'>
                        На моем курсе «Петербург сквозь года с Владимиром Заруцким» вы научитесь рисовать акварелью городские 
                        пейзажи. Этот курс для тех, кто хочет <span className='blue'>научиться или усовершенствовать свои навыки в акварели.</span> 
                        Уверен, вам понравится!
                    </p>
                </div>
                <img src={art} className='col-5 p-0 border-el'/>
            </div>
            <h2 className='responsive-header header-color header-font text-uppercase col-12 text-center mt-5'>
                Материалы на курс
            </h2>
            <div className='d-flex col-12 mt-5'>
                <div className='col-3 text-center align-self-start'>
                    <img src={paints} className='w-50'/>
                    <p className='responsive-text blue mt-3'>Краски</p>
                    <motion.button 
                        className='btn btn-about-of-course text-uppercase responsive-text'
                        onClick={() => setIsVisible(!isVisible)}
                    >список красок</motion.button>
                    <AnimatePresence initial={false}>
                        {isVisible ? (
                        <motion.div 
                            className='d-flex position-absolute responsive-text bg-white paints-about-of-course p-2 mt-1' 
                            style={{zIndex: 2, minWidth: '45vw'}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0}}
                            key="box"
                        >
                        <div>
                            <ul className='text-left'>
                                <li>Кобальт лазурно-голубой</li>
                                <li>Горизонт синий</li>
                                <li>Кобальт бирюзовый</li>
                                <li>Церулеум</li>
                                <li>Сиена натуральная</li>
                                <li>Охра красная</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-left'>
                                <li>Сиена жженая</li>
                                <li>Пиррол оранжевый</li>
                                <li>Кадмий красный светлый</li>
                                <li>Опера</li>
                                <li>Кобальт</li>
                            </ul>
                        </div>
                    </motion.div>) : null}
                    </AnimatePresence>
                </div>
                <div className='col-3 text-center align-self-start'>
                    <img src={brushes} className='w-50'/>
                    <p className='responsive-text blue mt-3'>Кисти</p>
                </div>
                <div className='col-3 text-center'>
                    <img src={paper} className='w-50'/>
                    <p className='responsive-text blue mt-3'>Бумага</p>
                    <p className='responsive-text'>300гр/м, хлопок Saunders Waterford, Палаццо</p>
                </div>
                <div className='col-3 text-center'>
                    <img src={pencil} className='w-50'/>
                    <p className='responsive-text blue mt-3'>Карандаш 2В, 3В</p>
                </div>
            </div>
            <div className='w-100 my-3' style={{height: '5px', backgroundColor: '#FFD5B4'}}/>
            <p className='col-12 text-center responsive-text pb-5'>Всё это рекомендации, не обязательно использовать то же самое!</p>
        </div>
    )
}