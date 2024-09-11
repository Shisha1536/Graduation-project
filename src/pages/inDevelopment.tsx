import { Link } from "react-router-dom";

export default function InDevelopment() {
    return (
        <>
        <p>Страница в разработке</p>
        <Link to='/'>Вернуться на Главную страницу</Link> 
        </>
    )
}