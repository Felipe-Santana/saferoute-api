import mongoose from "mongoose";

const connectToDb = async () => {
  const mongoDbName = process.env.MONGO_DBNAME || "development";
  const mongodbUser = process.env.MONGODB_USER || "mongo_local";
  const mongodbPassword = process.env.MONGODB_PASSWORD || "localPassword";
  const mongoUrl = `mongodb+srv://${mongodbUser}:${mongodbPassword}@saferoute-cluster.eg2i9.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`;

  console.log(mongoUrl);

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export default connectToDb;
