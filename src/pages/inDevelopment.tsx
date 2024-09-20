import { Link } from "react-router-dom";
import style from "../public/css/main.module.css"

export default function InDevelopment() {
    return (
        <main className={style.main}>
            <p>Страница в разработке</p>
            <Link className={style.inDevelopment} to='/'>Вернуться на Главную страницу</Link>
        </main>
    )
}