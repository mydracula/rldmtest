export async function onRequestPost(context) {
  const { request } = context
  const url = new URL(request.url)
  const response = fetch('https://telegra.ph/' + url.pathname + url.search, {
    method: request.method,
    body: request.body
  })
  // const headers = new Headers(response.headers)
  // headers.set('Access-Control-Allow-Origin', '*')
  // headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT')
  // headers.set('Access-Control-Allow-Headers', '*')
  // headers.set('Access-Control-Allow-Credentials', 'true')
  // 将服务端的响应返回给客户端
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  })
}
