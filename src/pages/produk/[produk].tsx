import { GetServerSideProps } from "next";
import DetailProduk from "../../views/DetailProduct";
import { retrieveProductById } from "../../utils/db/servicefirebase";
import { ProductType } from "../../types/Product.type";

const HalamanProduk = ({ produk }: { produk: ProductType | null }) => {
    if (!produk) {
        return <div>Produk tidak ditemukan.</div>;
    }

    return (
        <div>
            <DetailProduk produk={produk} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { produk } = context.params ?? {};
    const produkId = Array.isArray(produk) ? produk[0] : produk;

    if (!produkId) {
        return {
            notFound: true,
        };
    }

    try {
        const produkData = await retrieveProductById("products", produkId as string);

        if (!produkData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                produk: produkData,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default HalamanProduk;
