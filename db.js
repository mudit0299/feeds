const Sequelize=require('sequelize')
const db = new Sequelize('mydb', 'root', 'root', {
    dialect: 'sqlite',
    storage: 'feeds.db'
  })
  const Feeds=db.define('feeds',{
      id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
      },title:{
        allowNull:false,
        type:Sequelize.STRING
      },
      content:{
          allowNull:false,
          type:Sequelize.STRING
      }
  })
  db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
   Feeds
}
  