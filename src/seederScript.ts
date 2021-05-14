import dummydata from "./data/dummydata";
import connectDB from "../config/database";
import Product from "./models/product";

const importData = async (): Promise<void> => {
  try {
    await connectDB();

    await Product.deleteMany({});

    await Product.insertMany(dummydata);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
