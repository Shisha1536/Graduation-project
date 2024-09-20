import { Link } from "react-router-dom"
import style from "../../public/css/main.module.css"
import { Entrance } from "../../components/requests";
import Loader from "../../components/loader";
import { useState } from "react";

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <main className={style.main}>
            <section className={style.blockLogin}>
                <div>
                    <h1 className={style.blockLogin_h1}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <img className={style.img_Characters} src={process.env.PUBLIC_URL + '/Characters.png'} alt="icon"/>
                    <img className={style.img_1171274237} src={process.env.PUBLIC_URL + '/1171274237.png'} alt="icon"/>
                </div>
                
                <form className={style.form_login} id="login" name="login" action="/api/v1/account/login" method="post">
                    <div className={style.block_link}>
                        <Link className={style.link_login} to='/login'>Войти</Link>
                        <Link className={style.link_register} to='/inDevelopment'>Зарегистрироваться</Link>
                    </div>
                    <div>
                        <label htmlFor="login">Логин или номер телефона:</label>
                        <input className={style.login} type="text" name="login" value={login} 
                            onChange={event => setLogin(event.target.value)}></input>
                        <label htmlFor="password">Пароль:</label>
                        <input className={style.password} type="password" name="password" 
                            value={password} onChange={event => setPassword(event.target.value)}></input>
                    </div>
                    <button onClick={Entrance} className={style.btn_login} type='button' id="btn_login" 
                        disabled={!login || !password} >Войти</button>
                    <Link className={style.recover_password} to='/inDevelopment'>Восстановить пароль</Link>
                    <div className={style.block_log_in_via}>
                        <label htmlFor="">Войти через:</label>
                        <div className={style.log_in_via}>
                            <Link className={style.log_in_via_link} to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/google.png'} alt=""/></Link>
                            <Link className={style.log_in_via_link} to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/facebook.png'} alt=""/></Link>
                            <Link className={style.log_in_via_link} to='/inDevelopment'><img src={process.env.PUBLIC_URL + '/yandex.png'} alt=""/></Link>
                        </div>
                    </div>
                </form>
            </section>
            <Loader />
        </main>
    )
}