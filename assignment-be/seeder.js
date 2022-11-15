import mongoose from "mongoose";
import dotenv from "dotenv";
import { campaignData } from "./data/campaignData.js";
import { platformData } from "./data/platformData.js";
import { productData } from "./data/productData.js";
import Campaign from "./models/campaignModel.js";
import Product from "./models/productModel.js";
import Platform from "./models/platformModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Campaign.deleteMany();
    await Product.deleteMany();
    await Platform.deleteMany();

    const createdProducts = await Product.insertMany(productData);
    const productId = createdProducts[0]._id;

    const sampleCampaigns = campaignData.map((campaign) => {
      return { ...campaign, product: productId };
    });

    await Campaign.insertMany(sampleCampaigns);

    await Platform.insertMany(platformData)

    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Campaign.deleteMany();
    await Product.deleteMany();
    await Platform.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
