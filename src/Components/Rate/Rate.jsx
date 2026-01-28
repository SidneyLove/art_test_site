<<<<<<< HEAD
import { RateCard } from "./RateCard"
import rate_arts from '../../img/rate_arts.png'
import rate_arts_2 from '../../img/rate_arts_2.png'

export const Rate = () => {

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center rate-bg text-center pt-3" id="rate">
            <h2 className="col-12 responsive-header header-font text-uppercase header-color mt-5 mb-5">тарифы</h2>
            <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <RateCard 
                    header='рисую сам' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса'    
                    }}
                    oldPrice='7990'
                    newPrice='4990'
                    imgSrc={rate_arts}
                />
                <div style={{width: '3rem'}}/>
                <RateCard 
                    header='с поддержкой' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса',
                    4: '+1000 бонусных рублей! Можно потратить при покупке курса на следующем марафоне. Сгорают через 3 месяца'
                    }}
                    oldPrice='9990'
                    newPrice='5990'
                    imgSrc={rate_arts}
                />
                <div style={{width: '3rem'}}/>
                <RateCard 
                    header='VIP' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса'    
                    }}
                    oldPrice='22980'
                    newPrice='15990'
                    imgSrc={rate_arts_2}
                />
            </div>
        </div>
    )
=======
import { RateCard } from "./RateCard"
import rate_arts from '../../img/rate_arts.png'
import rate_arts_2 from '../../img/rate_arts_2.png'

export const Rate = () => {

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center rate-bg text-center pt-3" id="rate">
            <h2 className="col-12 responsive-header header-font text-uppercase header-color mt-5 mb-5">тарифы</h2>
            <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <RateCard 
                    header='рисую сам' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса'    
                    }}
                    oldPrice='7990'
                    newPrice='4990'
                    imgSrc={rate_arts}
                />
                <div className="col-1"/>
                <RateCard 
                    header='с поддержкой' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса',
                    4: '+1000 бонусных рублей! Можно потратить при покупке курса на следующем марафоне. Сгорают через 3 месяца'
                    }}
                    oldPrice='9990'
                    newPrice='5990'
                    imgSrc={rate_arts}
                />
                <div className="col-1"/>
                <RateCard 
                    header='VIP' 
                    text={{
                    1: '12 пейзажей: от ретро Петербурга до сегодняшних дней',
                    2: '17 уроков : теория + практика + развивающие упражнения',
                    3: 'Личная часовая онлайн-консультация с экспертом курса'    
                    }}
                    oldPrice='22980'
                    newPrice='15990'
                    imgSrc={rate_arts_2}
                />
            </div>
        </div>
    )
>>>>>>> 7603237923d99bbac572894bdcbb5260772bb522
}