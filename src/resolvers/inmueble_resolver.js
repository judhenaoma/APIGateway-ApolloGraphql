const InmuebleResolver = {
    Query: {
        inmuebleBySlug: async(_, { url_id }, {dataSources}) => {

            return await dataSources.inmuebleAPI.inmuebleBySlug(url_id)
           
        },
        listarInmuebles: async(_, {}, {dataSources}) => {
            return await dataSources.inmuebleAPI.listarInmuebles()  
        }
    },
    Mutation: {
        crearInmueble : async (_, {inmuebleInput}, {dataSources, tokenConfirmed}) => {

            const infoInmueble = {

                departamento: inmuebleInput.departamento,
                titulo:  inmuebleInput.titulo,
                descripcion:  inmuebleInput.descripcion,
                municipio:  inmuebleInput.municipio,
                direccion:  inmuebleInput.direccion,
                tipo_inmueble:  inmuebleInput.tipo_inmueble,
                precio:  inmuebleInput.precio,
                num_habitaciones:  inmuebleInput.num_habitacione,
                num_banos:  inmuebleInput.num_banos,
                area: inmuebleInput.area,
                longitud:  inmuebleInput.longitud,
                latitud:  inmuebleInput.latitud,
                aparcamiento:  inmuebleInput.aparcamiento,
                amoblado:  inmuebleInput.amoblado,
                piscina:  inmuebleInput.piscina,
                imagen_principal:  inmuebleInput.imagen_principal,
                imagen1:  inmuebleInput.imagen1,
                imagen2:  inmuebleInput.imagen2,
                imagen3:  inmuebleInput.imagen3
            }
            return dataSources.inmuebleAPI.crearInmueble(infoInmueble, tokenConfirmed)
        },

        actualizarInmueble : async (_, {inmuebleModif, inmueble_id}, {dataSources, tokenConfirmed}) => {
            const modifications = {
                departamento: inmuebleModif.departamento,
                titulo:  inmuebleModif.titulo,
                descripcion:  inmuebleModif.descripcion,
                municipio:  inmuebleModif.municipio,
                direccion:  inmuebleModif.direccion,
                tipo_inmueble:  inmuebleModif.tipo_inmueble,
                precio:  inmuebleModif.precio,
                num_habitaciones:  inmuebleModif.num_habitacione,
                num_banos:  inmuebleModif.num_banos,
                area: inmuebleModif.area,
                longitud:  inmuebleModif.longitud,
                latitud:  inmuebleModif.latitud,
                aparcamiento:  inmuebleModif.aparcamiento,
                amoblado:  inmuebleModif.amoblado,
                piscina:  inmuebleModif.piscina,
                imagen_principal:  inmuebleModif.imagen_principal,
                imagen1:  inmuebleModif.imagen1,
                imagen2:  inmuebleModif.imagen2,
                imagen3:  inmuebleModif.imagen3
            }

            await dataSources.inmuebleAPI.actualizarInmueble(modifications, inmueble_id, tokenConfirmed)

        },

        eliminarInmueble : async (_, {inmueble_id}, {dataSources, tokenConfirmed}) =>{
            await dataSources.inmuebleAPI.eliminarInmueble(inmueble_id, tokenConfirmed)
        }
    }
};

module.exports = InmuebleResolver;