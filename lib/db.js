const mysql = require('serverless-mysql')({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD
    }
})

exports.query = async (query) => {
    try {
        const results = await mysql.query(query)
        await mysql.end()
        return results
    } catch (error) {
        return { error }
    }
}