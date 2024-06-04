
interface LoginResponse {
    token: string,
    user: object
}

interface LoginDate { code: string, password: string, username: string, uuid: string }

/**
 * 校验code接口的返回值
 */

interface CodeResponse {
    uuid: string,
    img: string
}



export type {
    LoginResponse,
    LoginDate,
    CodeResponse
}
