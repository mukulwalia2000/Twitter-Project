const mongoose =require('mongoose');

const hashtagsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]

},{timestamp: true}) ;

const Hashtag = mongoose.model('Hashtag',hashtagsSchema);
module.exports = Hashtag;
