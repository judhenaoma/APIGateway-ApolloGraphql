const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class ReviewAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.review_api_url;
    }

    async crearReview(review) {
        review = new Object(JSON.parse(JSON.stringify(review)));
        return await this.post(`/reviews/`, review);
    }

    async listarReviews(inmueble_id) {
        return await this.get(`/reviews/${inmueble_id}/`);
    }


}

module.exports = ReviewAPI;