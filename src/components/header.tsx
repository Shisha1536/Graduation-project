import style from "../public/css/header.module.css"
import {  Link } from "react-router-dom";
import { HandlerGetAccountInfo } from "./requests";
import {  useState } from "react";

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
    const companyLimitStyle = {
        color: 'rgb(138, 197, 64)',
    }
    const usedCompanyCountStyle = {
        color: 'rgb(0, 0, 0)',
    }
    
    //const [token,setToken] = useState('');
    const [dataInfo, setDataInfo] = useState({});


    function HandlerLogOutOfTheProfile() {
        delete localStorage.graduation_project;
        window.location.replace('/')
    }
    function HandlerAccountInfo() {
        HandlerGetAccountInfo(localStorage.graduation_project, setDataInfo)
    }

    function Token() {
        if (localStorage.graduation_project) {
            if (Object.keys(dataInfo).length === 0) {
                HandlerAccountInfo();
            }
            let eventInfo: DataType = dataInfo;
            let eventFiltersInfo: eventFiltersInfo | undefined = eventInfo.eventFiltersInfo;
            let companyLimit: number | undefined = eventFiltersInfo?.companyLimit;
            let usedCompanyCount: number | undefined = eventFiltersInfo?.usedCompanyCount;
            return (
                <div className={style.block_user}>
                    <div className={style.block_param}>
                        <span>
                            <p>Использовано компаний </p><p style={usedCompanyCountStyle}>{usedCompanyCount}</p>
                        </span>
                        <span>
                            <p>Лимит по компаниям </p><p style={companyLimitStyle}>{companyLimit}</p>
                        </span>
                    </div>
                    <div className={style.block_usernameicon}>
                        <div>
                            <p>Алексей А.</p>
                            <button type="button" onClick={HandlerLogOutOfTheProfile}>Выйти</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/Mask_group.png'} alt="icon" width={32} height={32}/>
                    </div>
                </div>
            )
        } else {
            if (window.outerWidth > 375) {
                return (
                    <div className={style.registrationBlock}>
                        <Link className={style.registration} to='/inDevelopment'>Зарегистрироваться</Link>
                        <p style={pStyle}></p>
                        <Link className={style.login} to='/login'>Войти</Link>
                    </div>
                )
            } else {
                return (
                    <></>
                )
            }
        }
    }
    return (
        <header className={style.header}>
            <div className={style.block_header}>
                <img src={process.env.PUBLIC_URL + '/logoheader.png'} alt=""/>
                <nav className={style.blockNav}>
                    <Link to='/'>Главная</Link>
                    <Link to='/inDevelopment'>Тарифы</Link>
                    <Link to='/inDevelopment'>FAQ</Link>
                </nav>
                <Token />
                <img className={style.img_menu} src={process.env.PUBLIC_URL + '/menu.png'} alt=""/>
            </div>
        </header>
    )
}
 