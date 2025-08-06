import connectDb from "@/utilities/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";
export async function GET(req) {
  await connectDb();
  const { searchParams } = new URL(req.url);
  // console.log(req.url, "url");

  const page = searchParams.get("page") || {};
  // console.log(page, "page");
  const pageSize = 6;
  try {
    const currentPage= Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    // skip    = (5 - 1) * 5
		// skip = 20
		// 24        (5 - 1) * 6
		// = 4 * 6
		// 24
		// total number of documents in product collection
        const totalProducts = await Product.countDocuments()
        console.log(totalProducts, "to totalProducts");
		// 25 -> 26 -> 27 -> 28 -> 29 -> 30
		// db_product_count -> 100
		// apple -> 30
		// page ->
        const products = await Product.find({}) // apple -> 30
			.skip(skip)
			// the number of documents returned by mongodb after implementing the skip
			.limit(pageSize)
			.sort({ createdAt: -1 });
            return NextResponse.json({
                success: true,
			products,
			currentPage,
            totalProducts,
			totalPages: Math.ceil(totalProducts / pageSize),
            })
  } catch (error) {
    return NextResponse.json(
			{
				success: false,
				err: err.message,
			},
			{ status: 500 },
		);
  }
}
