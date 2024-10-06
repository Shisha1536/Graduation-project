import style from "../public/css/header.module.css"
import {  Link } from "react-router-dom";
import { getCookie, removeCookie } from 'typescript-cookie'
import { GetAccountInfo } from "./requests";
import {  useLayoutEffect, useState } from "react";

type DataType = {
    eventFiltersInfo?: object
}
type eventFiltersInfo = {
    companyLimit?: number,
    usedCompanyCount?: number
}

export function BlockHeader() {
    const pStyle = {
        background: 'rgb(2, 148, 145)',
        opacity: '0.6',
        height: '26px',
        margin: '0px',
        width: '2px'
    }
    
    const [token,setToken] = useState('');

    function Ura() {
        let accessToken: string | undefined = getCookie('graduation-project');
        if (accessToken) {
            setToken(accessToken)
        }
    }

    function LogOutOfTheProfile() {
        removeCookie('graduation-project');
        window.location.reload()
    }

    function Token() {
        Ura();
        if (token) {
            let data: any = GetAccountInfo(token);
            let eventInfo: DataType = data;
            let eventFiltersInfo: eventFiltersInfo | undefined = eventInfo.eventFiltersInfo;
            let companyLimit: number | undefined = eventFiltersInfo?.companyLimit;
            let usedCompanyCount: number | undefined = eventFiltersInfo?.usedCompanyCount;
            return (
                <div className={style.block_user}>
                    <div className={style.block_param}>
                        <span>
                            <p>Использовано компаний</p>
                            <p>Лимит по компаниям</p>
                        </span>
                        <span>
                            <p>{companyLimit}</p>
                            <p>{usedCompanyCount}</p>
                        </span>
                    </div>
                    <div className={style.block_usernameicon}>
                        <div>
                            <p>Алексей А.</p>
                            <button type="button" onClick={LogOutOfTheProfile}>Выйти</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/Mask_group.png'} alt="icon" width={32} height={32}/>
                    </div>
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
