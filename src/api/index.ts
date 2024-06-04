import http from "@/utils/httpRequest"
import * as TS from './api'

export const Login = (params: TS.LoginDate) => http.post<TS.LoginResponse>('/auth/login', params).then(res => res)


/**封装验证码获取效果 */
export const codeImg = () => http.get<TS.CodeResponse>('/auth/code').then(res => res)