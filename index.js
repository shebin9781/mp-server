const jsonServer = require('json-server')

const MPserver = jsonServer.create()

 const middleware = jsonServer.defaults()

 const router =jsonServer.router('Databasestore.json')

 const PORT =3000|| process.env.PORT

 MPserver.use(middleware)
 MPserver.use(router)

 MPserver.listen(PORT,()=>{
    console.log(`media player is started at port${PORT}`);
 })