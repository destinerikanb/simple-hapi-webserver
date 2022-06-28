const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return 'Homepage';
        }
    },
    {
        //method selain get
        method : '*',
        path : '/',
        handler : (request, h) => {
            return `Page can't be accessed using ${request.method} method`;
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) => {
            return 'About page';
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) => {
            return `Page can't be accessed using ${request.method} method`;
        }
    },
    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request, h) => {
            const {name='stranger'} = request.params;
            return `Hello, ${name}`
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return 'Page not found';
        }
    },

]

module.exports = routes