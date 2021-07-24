const {MongoClient} = require('mongodb');

const state = {
    db:null
}

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mcscx.mongodb.net/ticketbooking?retryWrites=true&w=majority`;
const client = new MongoClient(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
module.exports.connect = async function(done){
    try {
        var con = await client.connect();
        state.db = con.db('booking');
        done()
    } catch (error) {
        return done(error)
    }
}

module.exports.get = () => { return state.db }