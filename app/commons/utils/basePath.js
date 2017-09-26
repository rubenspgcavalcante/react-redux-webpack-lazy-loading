export default (route) =>
    process.env.NODE_ENV === 'development'? `/${route}` : `/react-redux-webpack-lazy-loading/${route}`;