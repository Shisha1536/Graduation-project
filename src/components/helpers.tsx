import { useState } from "react";

export let token = '';


function Test(t: string) {
    if (t) {
        debugger
        token = t;
        console.log(token)
    } else {
        return
    }
}

export function HandlerUserLogin(accessToken?: string) {
    if (accessToken) {
        Test(accessToken)
    } else {
        return
    }
}

export function HandlerDataLimitUser(limitUser: object) {
    const [data, setData] = useState({});
    if (Object.keys(limitUser).length === 0) {
        return data
    } else {
        setData(limitUser);
        return data
    }
}