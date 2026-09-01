import NavBar from "../../../Components/Nav";
import Products from "../../../Components/Products page comp/Products";

export const metadata = {
  title: "Sustainable Banana Fiber Products | Organic Fiber Catalog",
  description:
    "Explore our complete catalog of eco-friendly products made from banana pseudo-stem fiber: Raw Fiber Hanks, Cotton Cellulose Pulp, Handmade Paper & Folders, Kraft Carry Bags, Biodegradable Molded Tableware, Vegan Leather, Wallets, and Spun Loom Thread.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar variant="dark" />
      <Products />
    </main>
  );
}
