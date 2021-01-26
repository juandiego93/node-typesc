import router from './router/router';
import Server from './server/server';
import MySQL from './mysql/mysql';
const server = Server.init(3000);
server.app.use(router)
server.start(() => {
    console.log('Server Running port: ', 3000);
})