const Sequelize=require('sequelize')
const db = new Sequelize('mydb', 'root', 'root', {
 
    dialect: 'sqlite',
    storage: 'feeds.db'
  })
  const Feeds=db.define('feeds',{
    id:{
      type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
    },
      author:{
        allowNull:false,
        type:Sequelize.STRING
      },
      content:{
          allowNull:false,
          type:Sequelize.STRING
      }
  })
  const Users=db.define('users',{
    username:{
      allowNull:false,
      type:Sequelize.STRING,
      unique:true
    },
    email:{
        allowNull:false,
        type:Sequelize.STRING
    },firstname:{
      allowNull:false,
      type:Sequelize.STRING,
      //unique:true
    },lastname:{
      allowNull:false,
      type:Sequelize.STRING,
      //unique:true
    },
    phoneno:{
      allowNull:false,
      type:Sequelize.INTEGER,
      unique:true
    },password:{
      allowNull:false,
      type:Sequelize.STRING,
    }

})

  db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
   Feeds,db,Users
}
  