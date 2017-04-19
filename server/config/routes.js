const users = require("./../controllers/users.js")

module.exports = function(app) {
    //routes to methods.
    app.get("/users", users.get_all_users)
    app.post("/createUser", users.createUser)
    app.delete("/deleteUser/:id", users.deleteUser)
}