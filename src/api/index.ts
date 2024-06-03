import http from "@/utils/httpRequest"


interface LoginResponse {
    token: string,
    user: object
}
interface LoginDate { code: string, password: string, username: string, uuid: string }

export const Login = (params: LoginDate) => http.post<LoginResponse, LoginDate>('/auth/login', params).then(res => res)
