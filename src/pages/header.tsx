import style from "../public/css/header.module.css"
import {  Link } from "react-router-dom";
import { getCookie } from 'typescript-cookie'
import { GetAccountInfo } from "../components/requests";
import { ReactElement, useEffect, useState } from "react";

interface Data {
    companyLimit: number,
    usedCompanyCount: number
}

export function BlockHeader() {
    const pStyle = {
        background: 'rgb(2, 148, 145)',
        opacity: '0.6',
        height: '26px',
        margin: '0px',
        width: '2px'
    }
    const [login, setLogin] = useState(false);
    const [data, setData] = useState();



    async function Test() {
        useEffect(() => {
            (async () => {
            const result = await GetAccountInfo(getCookie('graduation-project'));
            if (typeof(result) == "object") {
                setData(result)
            }
           })()
          }, []);
    }

    function Token() {
        if (getCookie('graduation-project')) {
            setLogin(true);
        } else {
            setLogin(false)
        }
        if (login) {
            console.log('1')
            let results = Test();
            console.log('2')
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
                    <Link className={style.registration} to='/inDevelopment'>Зарегистрироваться</Link>
                    <p style={pStyle}></p>
                    <Link className={style.login} to='/login'>Войти</Link>
                </div>
            )
        }
    }

    return (
        <header className={style.header}>
            <img src={process.env.PUBLIC_URL + '/logoheader.png'} alt=""/>
            <nav className={style.blockNav}>
                <Link to='/'>Главная</Link>
                <Link to='/inDevelopment'>Тарифы</Link>
                <Link to='/inDevelopment'>FAQ</Link>
            </nav>
            <Token />
        </header>
    )
}