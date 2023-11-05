import mongoose from 'mongoose';

//const uri = 'mongodb://localhost:27017/blog-app';
const uri = process.env.MONGO_URI.replace("<password>", process.env.DB_PASSWORD);
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false,
};

mongoose.connect(uri, options);

const connection = mongoose.connection;

mongoose.connect(uri).then(()=>{
console.log("database is connected");
})

export default connection;