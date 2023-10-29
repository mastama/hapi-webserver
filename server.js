const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.Server({
        port: 5000,
        host: '127.0.0.1',
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (requst, h) => {
            return "Hello World Hapi!";
        }
    })

    await server.start();
    // console.log(`Server berjalan pada ${server.info.uri}`);
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();