const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class InmuebleAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.inmueble_api_url;
    }

    async crearUsuario(usuario) {
        usuario = new Object(JSON.parse(JSON.stringify(usuario)));
        return await this.post('/usuario/registro/', usuario);
    }

    async crearInmueble(inmueble, token) {
        inmueble = new Object(JSON.parse(JSON.stringify(inmueble)));
        return await this.post('/crear-inmueble/', inmueble, 
            { headers: {'Authorization': `Bearer ${token}`}})
    }

    async actualizarInmueble(inmuebleModif, inmueble_id, token){
        inmuebleModif = new Object(JSON.parse(JSON.stringify(inmuebleModif)));
        return await this.put(`/lista-inmuebles-host/modificar/${inmueble_id}/`, inmuebleModif, 
        { headers :{'Authorization': `Bearer ${token}`}})
    }

    async eliminarInmueble(inmueble_id, token){
        return await this.get(`eliminar-inmueble/${inmueble_id}/`,{}, {headers :{'Authorization': `Bearer ${token}`}})

    }

    async listarInmuebles(){
        return await this.get(`/lista-inmuebles/`);
    }

    async inmuebleBySlug(url_id) {
        return await this.get(`/inmueble/${url_id}/`);
    }

    async login(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/token/refresh/`, token);
    }

}


module.exports = InmuebleAPI;