import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const blogSchema = new mongoose.Schema({
 title: String,
 description: String,
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);


export default Blog;
