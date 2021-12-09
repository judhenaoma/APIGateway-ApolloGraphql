const { gql } = require('apollo-server');
const inmuebleTypeDefs = gql `

    type CatchRespuesta {
        mensaje: String
        error : String
    }

    type Inmueble{
        departamento: String
        titulo: String
        descripcion: String
        municipio: String
        direccion: String
        tipo_inmueble: String
        precio: Int
        num_habitacione: Int
        num_banos: Int
        area: String
        longitud: Float
        latitud: Float
        aparcamiento: Boolean
        amoblado: Boolean
        piscina: Boolean
        imagen_principal: String
        imagen1: String
        imagen2: String
        imagen3: String
    }
    type InmuebleDetail{
        id : Int
        tipo_inmueble : String
    }

    input InmuebleInput {
        departamento: String!
        titulo: String
        descripcion: String!
        municipio: String!
        direccion: String!
        tipo_inmueble: String!
        precio: Int!
        num_habitacione: Int!
        num_banos: Int!
        area: String!
        longitud: Float!
        latitud: Float!
        aparcamiento: Boolean!
        amoblado: Boolean!
        piscina: Boolean!
        imagen_principal: String!
        imagen1: String!
        imagen2: String!
        imagen3: String!
    }

    
    type Query {
        inmuebleBySlug(url_id: String!):  InmuebleDetail
        listarInmuebles : [Inmueble]
    }
    type Mutation {
        crearInmueble(inmuebleInput : InmuebleInput!) : CatchRespuesta
        actualizarInmueble(inmuebleModif : InmuebleInput!, inmueble_id : Int!) : CatchRespuesta
        eliminarInmueble(inmueble_id : Int!) : CatchRespuesta
    }
    
`;

module.exports = inmuebleTypeDefs;

