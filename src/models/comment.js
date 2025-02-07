import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
},{timestamps:true});

const Comment = moongoose.model('Comment',commentSchema);
export default Comment;