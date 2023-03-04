export async function onRequestPost(context) {
  const { request } = context
  const url = new URL(request.url)
  const response = fetch('https://telegra.ph/' + url.pathname, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
  return response
}
