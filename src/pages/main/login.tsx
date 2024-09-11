import { Link } from "react-router-dom"
import style from "../../public/css/main.module.css"

interface Login {
    login: string;
    password: string
}
export default function Login() {

    //const newPost = {
    //    login: "sf_student10",
    //    password: "KHKfTXb"
    //}
    //fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
    //    method: 'POST',
    //    body: JSON.stringify(newPost),
    //    headers: {
    //        'Content-type': 'application/json; charset=UTF-8'
    //    }
    //})
    //.then((response)=>response.json())
    //.then((data)=>{console.log(data)})
    //function handleFormSubmit() {
    //    debugger
    //    let logopass = applicantForm?.querySelectorAll('input');
    //    let  datalogin: Record<string, string> = {};
    //    logopass?.forEach((e)=> {
    //        let key = e.name;
    //        let value = e.value;
    //        datalogin[key] = value;
    //    })
    //    queriLogin(datalogin);
    //}
      
    const applicantForm = document.getElementById('login')
    const btnLogin = document.querySelector('#btn_login')
    btnLogin?.addEventListener('click', function (e) {
        debugger
        let logopass = applicantForm?.querySelectorAll('input');
        let  datalogin: Record<string, string> = {};
        logopass?.forEach((e)=> {
            let key = e.name;
            let value = e.value;
            datalogin[key] = value;
        })
        debugger

        queriLogin(datalogin);
    })
    async function queriLogin(datalogin: Record<string, string>) {
        debugger
        const res = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            body: JSON.stringify(datalogin),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        console.log(res)
    }
    return (
        <main className={style.main}>
            <section className={style.blockLogin}>
                <h1 className={style.blockLogin_h1}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
            </section>
            <form id="login" action="/api/v1/account/login" method="post">
                <label htmlFor="login">Логин или номер телефона:</label>
                <input type="text" name="login"></input>
                <label htmlFor="password">Пароль:</label>
                <input type="text" name="password"></input>
                <button type='button' id="btn_login">Войти</button>
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