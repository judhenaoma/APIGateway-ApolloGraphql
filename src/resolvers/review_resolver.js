const ReviewResolver = {
    Query: {
        listarReviews: async(_, { inmuebleId }, { dataSources }) => {
            return dataSources.reviewAPI.listarReviews(inmuebleId)
        
        }
    },

    Mutation: {
        crearReview : async (_ , {inputReview, inmuebleId}, {dataSources})=>{

            const infoReview = {
                review : inputReview.review,
                inmueble_id : inmuebleId
            }
            return dataSources.reviewAPI.crearReview(infoReview)
        }
    }
};


module.exports = ReviewResolver;