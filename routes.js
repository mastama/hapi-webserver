const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut!";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut!";
        }
    },
    //penggunaan PATH PARAMETER
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            //penggunaan QUERY PARAMETER
            const {language} = request.query;
            if (language === "idn") {
                return `Heii bro, ${name}!`; //> http://localhost:5000/hello/mastama?language=idn
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: "*",
        path: "/{any}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    },
];

module.exports = routes;