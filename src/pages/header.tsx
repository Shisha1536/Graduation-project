import style from "../public/css/header.module.css"
import {  Link } from "react-router-dom";
import { getCookie } from 'typescript-cookie'
import { GetAccountInfo } from "../components/requests";
import { ReactElement, useEffect, useState } from "react";

export function BlockHeader() {
    const pStyle = {
        background: 'rgb(2, 148, 145)',
        opacity: '0.6',
        height: '26px',
        margin: '0px',
        width: '2px'
    }
    const [login, setLogin] = useState('');
    const [data, setData] = useState();



    async function Test() {
        useEffect(() => {
            (async () => {
                console.log('1')
                let a = getCookie('graduation-project');
                if (a) {
                    setLogin(a)
                }
            let b = await GetAccountInfo(login);
            if (b === undefined) {
                return <>Still loading...</>;
              }
            if (typeof(b) == "object") {
                setData(b)
            }
           })()
          }, []);
    }

    function Token(props: any) {
        debugger
        if (login) {
            Test();
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
            <Token  funck = {setData}/>
        </header>
    )
}
