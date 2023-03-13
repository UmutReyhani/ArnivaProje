const Sequelize=require('sequelize')
const db=require('../config/database.js')

const User=db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=User
