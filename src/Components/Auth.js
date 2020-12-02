//当前登录用户的sessionStorage的key
const APP_LOGIN_USER = "APP_LOGIN_USER";
/**
 * 校验当前用户是否登录
 * @return {Boolean} 如登录  true  否  false
 */
export function AuthLogin() {
    let loginUserStr = sessionStorage.getItem('APP_LOGIN_USER');
    if (loginUserStr) {
        return true
    }
    return false;
}
/**
 * 存储点前用户登录信息到本地
 * @param {Object} user
 * @return undefined
 */
export function SaceLoginUserInfo(user) {
    sessionStorage.setItem(APP_LOGIN_USER, JSON.stringify(user))
}