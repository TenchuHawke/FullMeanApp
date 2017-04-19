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
        console.log(req.body)
        var newUser = new User(req.body)
        newUser.save(function(err, data) {
            if (err) {
                console.log("user create error", err)
                res.json({ added: false, error: err })
            } else {
                req.session.UserId = data._id
                console.log("Logged in user ID:", req.session.UserId)
                res.json({ added: true })
            }
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
    deleteUser: function(req, res) {
        console.log("delete user")
        User.remove({ _id: req.params.id }, function(err) {
            if (err) {
                console.log("User delete error")
            }
            res.json(true)
        })

    }

}