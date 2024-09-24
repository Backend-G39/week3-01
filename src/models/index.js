//? belongsTo: pertenece a
//? hasMany: tiene muchos 

const Article = require("./Article");
const Author = require("./Author");
const City = require("./City");
const Country = require("./Country");

Article.belongsTo(Author) //! article -> authorId
Author.hasMany(Article)

//! city -> countryId
City.belongsTo(Country)
Country.hasMany(City)


