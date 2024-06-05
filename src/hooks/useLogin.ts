import { ref } from 'vue'
import { codeImg, Login } from '@/api'
import { encrypt } from '@/utils/rsaEncrypt'
import { getToken, setToken } from '@/utils/auth'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default function useLogin() {
    const router = useRouter()
    const form = ref({
        username: 'admin',
        password: '123456',
        code: '',
        CodeUrl: '',
        uuid: '',
        copyPassword: '123456'
    })

    /**一进页面就讲密码进行储存 */
    setToken('copyPassword', form.value.password)
    /**
     * 请求验证码图片
     */
    const code = async () => {
        let { uuid, img } = await codeImg()
        form.value.CodeUrl = img
        form.value.uuid = uuid
    }

    /**点击图片重新请求图片验证码 */
    const GetCode = () => {
        /**TODO: 做防抖进行节能 */
        code()
    }
    /**
     * 当输入完密码以后呢,把密码保存到cookie中
     */
    const savePasswordCookie = () => {
        setToken('copyPassword', form.value.password)
        form.value.copyPassword = form.value.password
    }

    /**登录接口 */
    const oustuadd = () => {
        if (form.value.copyPassword === getToken('copyPassword')) {
            /**这个时候就是密文,加密后的密码 */
            form.value.copyPassword = encrypt(form.value.copyPassword)
            console.log(form.value.copyPassword, ' form.value.copyPassword')
        }
        let result = {
            code: form.value.code,
            password: form.value.copyPassword,
            username: form.value.username,
            uuid: form.value.uuid
        }
        Login(result)
            .then((res) => {
                console.log(res, 'res');
                if (res.status === 200) {
                    setToken('Authorization', res.token)
                    router.replace({
                        path: '/dashboard'
                    })
                } else {
                    ElMessage.error(res.message)
                }


            })
            .catch((err) => {
                // 用弹框报错弹出去
                console.log(err, '报错了')
                // ElMessage.error(err.message)
            })
        // 接下来调用login接口,储存token,并且跳转至首页
    }
    return {
        form,
        code,
        GetCode,
        savePasswordCookie,
        oustuadd
    }
}
