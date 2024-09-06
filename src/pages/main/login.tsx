import style from "../../public/css/main.module.css"

export default function Test() {
    return (
        <main className={style.main}>
            <section className={style.blockLogin}>
                <h1 className={style.blockLogin_h1}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
            </section>
        </main>
       
    )
}