

export const WelcomeCard = ({name, text}) => {

    return (
        <div className="border-el welcome_card_bg text-center px-2" style={{minWidth: '12rem', maxWidth: '75%'}}>
            <p className="responsive-text-s mb-0 mt-4 blue"><b>{name}</b></p>
            <p className="responsive-text-s mt-0 mb-4"><b>{text}</b></p>
        </div>
    )
}