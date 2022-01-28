import { extend } from "umi-request"
import { notification } from "antd"
import qs from "qs"

const https:any = {}
const codeMessage:any = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
}

const errorHandler = (error:any) =>{
    const {response} = error
    if(response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText
        const {status, url} = response
        notification.error({
            message:`请求错误${status}: ${url}`,
            description: errorText
        })
    }
    return response
}

// 配置request请求时的默认参数
const request = extend({
    timeout:3000,
    errorHandler,
    // 默认错误处理
    credentials: 'include'//默认请求是否带上cookie
})
// request 拦截器，改变 url 或者 options
request.interceptors.request.use((url, options) => {
    return {
        url,
        options: {...options}
    }
})

// response拦截器，处理response
request.interceptors.response.use((response, option) => {
    const contentType = response.headers.get('Content-type')
    return response
})


/**
 * 请求封装
 */

https.get = (url:any, data ={}) => {
    return request.get(url, {parmas: data})
}
// post请求
https.postJson = (url:any , data={}) => {
    return request.post(url, {
        data,
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}

// post请求表单数据格式
https.postForm = (url:any , data={}) => {
    return request.post(url, {
        data: qs.stringify(data, {arrayFormat: 'brackets'}),
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
// put请求
https.putJson = (url:any , data={}) => {
    return request.put(url, {
        data,
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}
// put请求表单数据格式
https.putForm = (url:any , data={}) => {
    return request.put(url, {
        data: qs.stringify(data),
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
// delete删除数据
https.deleteJson = (url:any , data={}) => {
    return request.delete(url, {
        data,
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}
// delete删除表单数据
https.deleteForm = (url:any , data={}) => {
    return request.delete(url, {
        data: qs.stringify(data),
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

https.setHeader = (headers = {}) => {
    request.extendOptions({headers: {...headers}})
}

export default https