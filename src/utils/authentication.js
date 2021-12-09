const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token_ = req.headers.authorization || '';
    
    if (token_ == '')
        return { userIdToken: null }

    else {
        try {
            splitToken = token_.split(" ")
            const token = splitToken[1].trim()
        
            
            let requestOptions = {
                method: 'POST', headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }), redirect: 'follow'
            };

            let response = await fetch(
                `https://inmuebles-ciclo4.herokuapp.com/token/verify/`,
                requestOptions)

            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }

            return { tokenConfirmed: token };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;