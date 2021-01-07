// pages/404.js
function Custom404() {
  return <h1>404 - Página não encontrada</h1>
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export async function getStaticProps(ctx) {
  const { res, req} = ctx    

  if(req.path === '/gerador-assinatura'){
    res.writeHead(302, {Location: '/gerador-assinatura/index.html'})
    res.end()
    return {props:{}}
  }

  res.writeHead(302, { Location: '/' })
  res.end()
  return {props:{}}
}

export default Custom404