const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
    uid: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    photourl: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    phone: {
        type: String,
    },
    college: {
        type: String,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model("User", user_schema);
