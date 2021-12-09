const { gql } = require('apollo-server');
const reviewTypeDefs = gql `
    scalar Date
    input Review {
        review : String!
    }

    type Respuesta {
        mensaje : String
    }

    type ReviewPost {
        review : String!
        created_at : Date
    }

    type Query {
        listarReviews(inmuebleId: Int!): [ReviewPost]
    }

    type Mutation {
        crearReview(inputReview : Review!, inmuebleId : Int!) : Respuesta
    }
`;

module.exports = reviewTypeDefs;