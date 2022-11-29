import Hapi from "@hapi/hapi"

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on port 3000');

    server.route({
        method: 'GET',
        path: '/index',
        handler:  (request, h) => {
            return ({err:false,msg:"Helloo there"})
        }
    })

    server.route({
        method:"POST",
        path:'/login',
        handler: (request,h)=>{
            let {username} = request.payload
            return ({err:false,username:username,time:new Date().toISOString()})
        }
    })

};


init();