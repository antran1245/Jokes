const Joke = require('../models/jokes.model');

// Get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Get a single joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Somthing went wrong", error: err}));
}

// Create a joke
module.exports.createJoke = (req, res) => {
    console.log(req.body)
    Joke.create(req.body)
        .then(createdJoke => res.json({joke: createdJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Delete a joke
module.exports.deletedJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id })
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Random a joke
module.exports.randomJoke =(req, res) => {
    let rand = Math.floor(Math.random() * 10)
    Joke.find().skip(rand).limit(1)
        .then(result => res.json({joke: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}