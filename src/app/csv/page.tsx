"use client";

import { sanityFatch } from "@/sanity/lib/fatch";
import { Products } from "../products/page";
import { allProducts } from "@/sanity/lib/queries";

const exportToCSV = async () => {
  try {
    // Fetch products data from Sanity
    const products: Products[] = await sanityFatch({ query: allProducts });

    // Check if data is available
    if (!products || products.length === 0) {
      console.warn("No products found.");
      return;
    }

    // Format data for CSV
    const data = [
      ["ID", "Name", "Price", "Category"], // CSV headers
      ...products.map((product) => [
        product._id || "",
        product.title || "",
        product.price || "",
        product.description || "",
        product.image || "",
        product.inventory || "",
      ]),
    ];

    // Generate CSV content
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => row.join(",")).join("\n");

    // Encode the CSV content
    const encodedUri = encodeURI(csvContent);

    // Create a temporary link element
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");

    // Append the link to the document, trigger click, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error fetching or exporting products:", error);
  }
};

export default function ExportCSV() {
  return (
    <button
      onClick={async () => await exportToCSV()}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download CSV
    </button>
  );
}
