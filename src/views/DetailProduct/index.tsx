// import { ProductType } from '@/types/product';
import { ProductType } from "../../types/Product.type";
import styles from "./detailProduct.module.scss";

// const formatPrice = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const DetailProduk = ({ produk }: { produk: ProductType }) => {
    return (
        <>
            <h1 className={styles.title}>Detail Produk</h1>
            <div className={styles.detailProduk}>
                <div className={styles.detailProduk__image}>
                    <img src={produk.image && produk.image} alt={produk.name} />
                </div>

                <div className={styles.detailProduk__info}>
                    <h1 className={styles.detailProduk__name}>{produk.name}</h1>
                    <p className={styles.detailProduk__category}>{produk.category}</p>
                    <p className={styles.detailProduk__price}>
                        Rp {produk.price && produk.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </>
    )
}

export default DetailProduk;