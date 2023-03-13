const {Sequelize}=require('sequelize')

module.exports=new Sequelize('postgres','postgres','1234',{
    host:'127.0.0.1',
    dialect:'postgres',
    define: {
        timestamps: false
    }
})
