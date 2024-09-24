import { useState } from "react";

export function UserLogin(accessToken?: string) {
    const [token, setToken] = useState('');
    if (accessToken) {
        
    }
}

export function DataLimitUser(limitUser: object) {
    const [data, setData] = useState({});
    if (Object.keys(limitUser).length === 0) {
        return data
    } else {
        setData(limitUser);
        return data
    }
}