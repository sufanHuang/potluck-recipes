const express = require ('express')
const recipes = express.Router()
const Recipe = require('../models/Recipe.js')
const to = require('await-to-js').default
const _ = require('lodash')



recipes.get('/', async(req, res)=>{
    let [ error, result ] = await to(Recipe.find())
    let outputData = _.map(result,(item) =>{
        return _.assign(
            {id:item._id},
            _.pick(item, ["title", "author", "prep_time", "ingredients", "steps"])
            )

    })
    if(error){
        res.status(500).json({message:error.message})
    }
    return res.json(outputData)
})

recipes.get('/:id', async(req,res)=>{
    let { id } = req.params
    let [ error, document ] = await to(Recipe.findOne({_id:id}))
    let { title, author, prep_time, ingredients, steps, date } = document._doc
    let outputItem = {
        id,
        title,
        author,
        prep_time,
        ingredients,
        steps,
        date
    }

    if(error){
        res.status(500).json({message:error.message})
    }
    return res.json(outputItem)
})

recipes.post('/', async(req, res)=>{
    const { title, author, prep_time, ingredients,steps } = req.body
    const newRecipe = new Recipe({
        title,
        author,
        prep_time,
        ingredients,
        steps
    })

    let [ error ] = await to( newRecipe.save())
    console.log(title)
    if(error){
        res.status(400).json({message:error.message})
    }
    return res.send('adding recipe')
})

recipes.delete('/:id', async(req,res)=>{
    let { id } = req.params
    let [ error ]= await to(Recipe.deleteOne({_id:id}))
    if(error){
        res.status(400).json({message:error.message})
    }
    return res.send('deleting recipe')
})

recipes.put('/:id', async(req, res)=>{
    let { id } = req.params
    let { title, author, prep_time, ingredients, steps } = req.body
    let [ error ]= await to(Recipe.updateOne(
        {_id:id},
        { $set:{ title, author, prep_time, ingredients, steps}}
    ))
    if(error){
        res.status(400).json({message:error.message})
    }
    return res.send('updating recipe')


})

module.exports = recipes
