/***
 * 需求: 将token封装到cookie中
 * 下一步:引入
 * 
 * 操作的步骤
 * 1. 设置到cookie中 set
 * 2. 用的时候从cookie中拿到 get
 * 3. 当我们退出当前用户的时候,将token从cookies中移除 remove
 * 
 */
//@ts-ignore
import Cookies from 'js-cookie'

/**提出来,方便随后进行配置 */
// let token = "token"

/**
 * 设置token
 */
function setToken(tokenKey: string, value: string) {
    Cookies.set(tokenKey, value);
}

/**
 * 获取token
 */
function getToken(tokenKey: string) {
    return Cookies.get(tokenKey); // => 'value'
}

/**
 * 移除token
 */
function removeToken(tokenKey: string) {
    Cookies.remove(tokenKey);
}


export {
    setToken,
    getToken,
    removeToken
}