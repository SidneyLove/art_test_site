

export const FAQ = () => {

    return (
        <div className="container mt-5">
            <h2 className="col-12 text-center responsive-header header-font text-uppercase header-color pt-3">
                частые вопросы
            </h2>
            <button 
                className="btn col-12 border-el bg-white header-color responsive-text p-3 mt-3"
                data-toggle="collapse" 
                href="#multiCollapseExample1" 
                role="button" 
                aria-expanded="false" 
                aria-controls="multiCollapseExample1"
            >
                Я совсем не умею рисовать.<br/> Стоит ли мне идти на курс?
            </button>
            <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body responsive-text">
                        Конечно стоит! Курс специально построен так что сначала идут простые картины а потом более сложные, 
                        так что вы успеете влиться в процесс и достичь высоких результатов! Для опытных художников курс также 
                        будет полезен. Вы сможете ещё больше отработать технику, а также увеличить свою насмотренность.
                    </div>
                </div>
            </div>
            <button 
                className="btn col-12 border-el bg-white header-color responsive-text p-3 mt-3" 
                type="button" 
                data-toggle="collapse" 
                data-target="#multiCollapseExample2" 
                aria-expanded="false" 
                aria-controls="multiCollapseExample2"
            >
                Как устроена обратная связь?
            </button>
            <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body responsive-text">
                        В конце урока вы выложите фотографию своей работы. У преподавателя будет возможность оставить 
                        к вашей работе текстовый, графический (пометки на рисунке), а также аудио-комментарий. В нижней части 
                        каждого урока будет блок комментариев, где можно задавать любые вопросы по обучению.
                    </div>
                </div>
            </div>
        </div>
    )
}