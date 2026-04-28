import { useEffect, useState } from "react";

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
};

const ProdukPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);

  // fungsi ambil data (dipakai untuk load & refresh)
    const getData = async () => {
        try {
        setLoading(true);
        const res = await fetch("/api/produk");
        const result = await res.json();
        setProducts(result.data);
        } catch (error) {
        console.error("Error:", error);
        } finally {
        setLoading(false);
        }
    };

    // load pertama kali
    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
        <h1><b>Daftar Produk</b></h1>

        {/* tombol refresh */}
        <button
            onClick={getData}
            style={{
            marginBottom: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            }}
        >
            {loading ? "Loading..." : "Refresh Data"}
        </button>

        {/* tampilkan data */}
        {products.map((product) => (
            <div
            key={product.id}
            style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
            }}
            >
            <h2><b>{product.name}</b></h2>
            <p>Harga: {product.price}</p>
            <p>Ukuran: {product.size}</p>
            <p>Kategori: {product.category || "-"}</p>
            </div>
        ))}
        </div>
    );
};

export default ProdukPage;