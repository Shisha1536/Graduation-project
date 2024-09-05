import style from "../public/css/header.module.css"

export function BlockHeader() {
    const pStyle = {
        background: 'rgb(2, 148, 145)',
        opacity: '0.6',
        height: '26px',
        margin: '0px',
        width: '2px'
    }

    function Token() {
        if (document.cookie.includes("accessToken")) {
            return (
                <div>
                    <div>
                        <p>Использовано</p>
                        <p>Лимит</p>
                    </div>
                    <div>User</div>
                </div>
            )
        } else {
            return (
                <div className={style.registrationBlock}>
                    <a href="#" className={style.registration}>Зарегистрироваться</a>
                    <p style={pStyle}></p>
                    <a className={style.login} href="#">Войти</a>
                </div>
            )
        }
    }

    return (
        <header className={style.header}>
            <img src={process.env.PUBLIC_URL + '/logoheader.png'} alt=""/>
            <nav className={style.blockNav}>
                <a href="#">Главная</a>
                <a href="#">Тарифы</a>
                <a href="#">FAQ</a>
            </nav>
            <Token />
        </header>
    )
}