import { getCookie, setCookie } from 'typescript-cookie'
import { Navigate } from "react-router-dom";

export function Entrance() {
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
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setCookie('graduation-project', data?.accessToken, { expires: 1 });
            loader?.classList.add('block_loader_none');
            return(
                <Navigate replace to='/'></Navigate>
            )
        })
    }
    queriLogin(datalogin)
}
export async function GetAccountInfo (authorized: string | undefined) {
    let token = `Bearer ${authorized}`
    await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data?.eventFiltersInfo
    })
}