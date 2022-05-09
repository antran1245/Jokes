const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes/', JokeController.findAllJokes);
    // app.get('/api/jokes/rand', JokeController.randomJoke);
    app.get('/api/jokes/:_id', JokeController.findOneJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateJoke);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.delete('/api/jokes/delete/:_id', JokeController.deletedJoke);
}