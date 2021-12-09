
const usersResolver = {
    Mutation: {
        signUpUser: async(_,  {userInput}, { dataSources }) => {
            const infoUsuario = {
                username: userInput.username,
                password: userInput.password,
                confirm_password : userInput.confirm_password,
                email : userInput.email,
                nombre : userInput.nombre,
                apellido : userInput.apellido,
                is_host : userInput.is_host,
            }
            return await dataSources.inmuebleAPI.crearUsuario(infoUsuario);

        },
        logIn: (_, { credentials }, { dataSources }) => 
            dataSources.inmuebleAPI.login(credentials),

        refreshToken: (_, { refresh }, { dataSources }) => 
            dataSources.inmuebleAPI.refreshToken(refresh),
    }
};

module.exports = usersResolver;