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

    //function Data(props: DataType) {
    //    setData(props)
    //}
    function Ura() {
        let accessToken: string | undefined = getCookie('graduation-project');
        if (accessToken) {
            setToken(accessToken)
        }
    }
    //useLayoutEffect(() => {
    //    GetAccountInfo(getCookie('graduation-project'), Data);
    //},[])

    function LogOutOfTheProfile() {
        removeCookie('graduation-project');
    }

    function Token() {
        debugger
        Ura();
        if (token) {
            let data: any = GetAccountInfo(token);
            let eventInfo: DataType = data;
            let eventFiltersInfo: eventFiltersInfo | undefined = eventInfo.eventFiltersInfo;
            let companyLimit: number | undefined = eventFiltersInfo?.companyLimit;
            let usedCompanyCount: number | undefined = eventFiltersInfo?.usedCompanyCount;
            return (
                <div>
                    <div>
                        <p>Использовано компаний {companyLimit}</p>
                        <p>Лимит по компаниям {usedCompanyCount}</p>
                    </div>
                    <div>
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
        
        
        //let accessToken: string | undefined = HelpersTokenBlockHeaders(getCookie('graduation-project'));
        //if (accessToken) {
        //    let eventInfo: DataType = data;
        //    let eventFiltersInfo: eventFiltersInfo | undefined = eventInfo.eventFiltersInfo;
        //    let companyLimit: number | undefined = eventFiltersInfo?.companyLimit;
        //    let usedCompanyCount: number | undefined = eventFiltersInfo?.usedCompanyCount;
        //    return (
        //        <div>
        //            <div>
        //                <p>Использовано компаний {companyLimit}</p>
        //                <p>Лимит по компаниям {usedCompanyCount}</p>
        //            </div>
        //            <div>
        //                <div>
        //                    <p>Алексей А.</p>
        //                    <button type="button" onClick={LogOutOfTheProfile}>Выйти</button>
        //                </div>
        //                <img src={process.env.PUBLIC_URL + '/Mask_group.png'} alt="icon" width={32} height={32}/>
        //            </div>
        //        </div>
        //    )
        //} else {
        //    
        //}
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
