import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";
import { retrieveProductById } from "../../utils/db/servicefirebase";

// digunakan client-side rendering
const HalamanProduk = ({ produk }: { produk: ProductType }) => {
    {/digunakan client-side rendering/}
  // const Router = useRouter();
  // console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.produk}`,
  //   fetcher
  // );
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );

    return (
        <div>
        <DetailProduk produk={produk} />
        </div>
    );
};

export default HalamanProduk;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses,
// dan akan mengambil data produk dari API sebelum merender halaman.
export async function getStaticPaths() {
    try {
        const res = await fetch("http://localhost:3000/api/produk");
        const response = await res.json()

        if (!response.data || !Array.isArray(response.data)) {
            throw new Error("Invalid API response");
        }

        const paths = response.data.map((produk: ProductType) => ({
            params: { produk: produk.id }
        }))

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error("Failed to fetch products for static paths:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
    try {
        const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
        const response: { data: ProductType } = await res.json();

        if (!response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                produk: response.data,
            }
        }
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return {
            notFound: true,
        };
    }
}