//goal is to check the length of the database users and if the length is 1 don't allow another user to register.
const db = ('./models/users')

module.exports = (req, res, next) => {
    db
    .get()
    .then((result) => {
        if (result.length === 1){
            console.log(result)
            res.status(401).json({ message: "Denied Access" })
        }
        if (result.length === 0) {
            next()
        }

    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    });
}