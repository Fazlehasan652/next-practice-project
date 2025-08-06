"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import Product from "@/models/product";
import Product from "../../models/product";
import connectDb from "@/utilities/db";

export async function addProduct(prevState) {
  try {
    await connectDb();
    const product = {
      category: prevState.category.toString(),
      title: prevState.title.toString(),
      description: prevState.description.toString(),
      price: Number(prevState.price),
      stock: Number(prevState.stock),
      sold: Number(prevState.sold),
      review: Number(prevState.review),
      like: Number(prevState.like),
      love: Number(prevState.love),
      yelp: Number(prevState.yelp),
      image: prevState.image,
    };

    await new Product(product).save();
  } catch (error) {
    console.log(error);
	console.log(error.message)
    return {
      message: `Error creating product${error.message}`,
    };
  }

  revalidatePath("/");
  // revalidatePath("/dashboard/admin/products");

  redirect("/");
}
