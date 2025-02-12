import { useCookies } from 'react-cookie';

export function GetCookies(){
        const [cookies] = useCookies();
        return cookies;
}


export function SetToken(token: string){
    const [cookies, setCookie] = useCookies();
    setCookie('access_token', token);
    return cookies;

}

export function GetToken(){
    const [cookies] = useCookies();
    return cookies["access_token"];
}

