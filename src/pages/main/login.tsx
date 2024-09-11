import { Link } from "react-router-dom"
import style from "../../public/css/main.module.css"

export default function Login() {
    return (
        <main className={style.main}>
            <section className={style.blockLogin}>
                <h1 className={style.blockLogin_h1}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
            </section>
            <form action="/api/v1/account/login" method="post">
                <label htmlFor="login">Логин или номер телефона:</label>
                <input type="text" name="login"></input>
                <label htmlFor="password">Пароль:</label>
                <input type="text" name="password"></input>
                <button>Войти</button>
                <Link to='/inDevelopment'>Восстановить пароль</Link>
            </form>
            <div>
                <label htmlFor="">Войти через:</label>
                <div>
                    <Link to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/google.png'} alt=""/></Link>
                    <Link to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/facebook.png'} alt=""/></Link>
                    <Link to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/yandex.png'} alt=""/></Link>
                </div>
            </div>
        </main>
       
    )
}