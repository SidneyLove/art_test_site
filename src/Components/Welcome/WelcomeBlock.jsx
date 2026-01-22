import welcome_img from '../../img/welcome_img.png';
import { SmoothLink } from '../SmoothLink';
import { WelcomeCard } from './WelcomeCard';

export const WelcomeBlock = () => {

    return (
        <div className="container-fluid overflow-hidden welcom-bg mt-3 p-0 px-3 pt-5">
            <div className='container row mx-auto py-4 px-0'>
                <div className="col-6 d-flex flex-column align-items-start p-0">
                    <h1 className='text-uppercase header-color responsive-header'>
                        <span className='responsive-header-welcome header-font'>Петербург</span> <br/>
                        <b className='header-font'>сквозь года</b> <br/>
                        <span className='responsive-text-m blue-dark'><b>с Владимиром Заруцким</b></span>
                    </h1>
                    <ul className='responsive-text px-3 py-4'>
                        <li>Нарисуйте <span className='blue'>12 пейзажей:</span> от ретро Петербурга до сегодняшних дней</li>
                        <li>Изучите <span className='blue'>способы передачи особенностей архитектуры</span> с помощью акварели</li>
                        <li>Научитесь передавать <span className='blue'>художественные образы и замыслы</span></li>
                    </ul>
                    
                        <SmoothLink href='#about_of_course'><p className='btn-bg w-auto text-uppercase text-white responsive-text py-2 px-5 rounded'>узнать подробности</p></SmoothLink>
                    
                </div>
                <div className="col-6 p-0">
                    <img className='img-fluid' src={welcome_img}/>
                </div>
                <div className='col-12 d-flex flex-column flex-md-row justify-content-center align-items-center' style={{marginBottom: '-7vh'}}>
                    <WelcomeCard name='Материал:' text='акварель'/>
                    <div style={{width: '0.5rem'}}/>
                    <WelcomeCard name='Количество картин:' text='12'/>
                    <div style={{width: '0.5rem'}}/>
                    <WelcomeCard name='Продолжительность курса:' text='20 часов'/>
                    <div style={{width: '0.5rem'}}/>
                    <WelcomeCard name='Доступ:' text='бессрочный'/>
                </div>
                
            </div>
            
        </div>
    )
}