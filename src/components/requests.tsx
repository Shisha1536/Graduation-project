import {  setCookie } from 'typescript-cookie'
import {  NavigateFunction } from "react-router-dom";

export function Entrance(nav: NavigateFunction) {    
    let loader = document.querySelector('.block_loader');
    loader?.classList.remove('block_loader_none');

    const applicantForm = document.getElementById('login');
    let logopass = applicantForm?.querySelectorAll('input');
    let  datalogin: Record<string, string> = {};
    logopass?.forEach((e)=> {
        let key = e.name;
        let value = e.value;
        datalogin[key] = value;
    })

    async function queriLogin(datalogin: Record<string, string>) {
        await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            body: JSON.stringify(datalogin),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setCookie('graduation-project', data?.accessToken, { expires: 1 });
            loader?.classList.add('block_loader_none');
        })
        nav('/searchCounterpartyInformation')
    }
    queriLogin(datalogin)
}
export async function GetAccountInfo (authorized: string | undefined, Data: (props: object) => void) {
    if (!authorized) {
        return
    }
    
    let token = `Bearer ${authorized}`
    await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        Data(data)
    })
}