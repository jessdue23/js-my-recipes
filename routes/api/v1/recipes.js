const router = require('express').Router()

const recipes = require('../../../data/recipes.json')

//map to get specific props
const newArray = recipes.map(({id, title, image, prepTime, difficulty}) =>{
    return {id, title, image, prepTime, difficulty}
})
console.log(newArray)


//get all recipes with the new array
router.get('/', (request, response) => {
    //console.log("works")
    response.send(newArray)
    console.log(newArray)
})

//get recipe with specific id
router.get('/recipe/:id', (request, response) => {
    console.log("works")

    //destructure
    const { id } = request.params
    
    //find function
    const foundRecipe = recipes.find(r => r.id.toString() === id)
    if(foundRecipe){
        response.send(foundRecipe)
    }
    else {
        response.send({error: {message: `Recipe not found`}})
    }
})

//post new recipe
router.post('/recipe/add', (request, response) => {
    console.log("working")
    id = recipes.length + 1
    //console.log(id)
    const { id, title, image, ingredients, instructions, prepTime, difficulty} = request.body
    //console.log(request.body)
    recipes.push({id, title, image, ingredients, instructions, prepTime, difficulty})

    //new code
    const foundRecipe = recipes.find(r =r.id.toString() === id)
    if(foundRecipe)
        response.send(foundRecipe)
    //response.send(recipes)
    console.log(foundRecipe)
    console.log("pusheddd")
})



module.exports = router