import https from "./request"

export async function login(params:any) {
    return https.postForm('/sys/user/login', params)
}

export async function getFakeCaptcha(params:any) {
    return https.get('/api/login')
}