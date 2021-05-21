const Sequelize = require('sequelize');
const db = require('../index');

const Comment = db.define('comment',{
    name :{
        type: Sequelize.STRING,
        allowNull: false
    },
    email :{
        type: Sequelize.STRING,
        allowNull: false,
    },
    website :{
        type: Sequelize.STRING
    },
    message :{
        type: Sequelize.STRING
    }
},{
    timestamps: false
});


module.exports = Comment;