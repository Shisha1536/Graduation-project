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

    async function Test() {
        let results = await GetAccountInfo(getCookie('graduation-project'))
            console.log(results)
            return (
                <div>
                    <div>
                        <p>Использовано</p>
                        <p>Лимит</p>
                    </div>
                    <div>User</div>
                </div>
            )
    }

    function Token() {
        if (getCookie('graduation-project')) {
            let results = Test();
            return results
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