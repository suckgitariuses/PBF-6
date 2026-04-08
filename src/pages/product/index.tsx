import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    // warna: string;
};

const kategori = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   if (!isLogin) {
    //     push("/auth/login");
    //   }
    // }, []);

    useEffect(() => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responsedata) => {
                // console.log("Data produk:", responsedata.data);
                setProducts(responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            });
        }, []);

    return (
        <div>
            <h1><b>Daftar Produk</b></h1>
            {products.map((product: ProductType) => (
                <div key={product.id}>
                    <h2><b>{product.name}</b></h2>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                    {/* <p>Warna: {product.warna}</p> */}
                </div>
            ))}
        </div>
    );
};

export default kategori;

// import TampilanProduk from "@/views/produk";

// const HalamanProduk = () => {
//     return <TampilanProduk />;
// };

// export default HalamanProduk;

// // import { useRouter } from "next/router";
// // import { useEffect, useState } from "react";

// // const Produk = () => {
// //     const [isLogin, setIsLogin] = useState(false);
// //     const { push } = useRouter();

// //     useEffect(() => {
// //         if (!isLogin) {
// //             push("/auth/login");
// //         }
// //     }, []);

// //     return (
// //         <div>
// //             Produk User Page
// //         </div>
// //     );
// // };

// // export default Produk;
