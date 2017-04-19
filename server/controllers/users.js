var mongoose = require("mongoose")

var User = mongoose.model("User")

module.exports = {
    get_all_users: function(req, res) {
        console.log("get all users")
        User.find({}, function(err, data) {
            if (err) {
                console.log("User find Error", err)
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    createUser: function(req, res) {
        console.log("Create User:", req.body)
        var newUser = new User(req.body)
        newUser.save(function(err, data) {
            if (err) {
                console.log("user create error", err)
                res.json({ added: false, error: err })
            } else {
                req.session.CurrentUser = data
                console.log("Logged in user ID:", req.session.CurrentUser)
                res.json({ added: true })
            }
        })
    },
    loginUser: function(req, res) {
        console.log("login user")
        User.find({ email: req.body.email }, function(err, data) {
            if (err) {
                console.log("User find Error", err)
                res.json(err)
            } else {
                let checkUser = data;
                if (checkUser.password === req.body.password) {
                    req.session.CurrentUser = checkUser;
                    res.json(data)
                } else {
                    res.json({ error: "Email and Password don't match." })
                }
            }
        })
    },
    deleteUser: function(req, res) {
        console.log("delete user")
        User.remove({ _id: req.params.id }, function(err) {
            if (err) {
                console.log("User delete error")
            }
            res.json(true)
        })
    },
    // updateUser: function(req, res) {
    //     UserModel.update({ $or: [{name: req.name}, {password: req.password}] }, { $set: { lastfm: req.params } }, { upsert: true }, function(){})
    //      User.findOne({_id: req.body.id}, function(err){
    //          if (err) {
    //              console.log("User find error")
    //          }
    //     })
    // },

}