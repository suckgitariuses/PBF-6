import Link from "next/link";
import styles from "../../../styles/product.module.scss";
import { ProductType } from "../../../types/Product.type";

const formatPrice = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const TampilanProduk = ({ products, basePath = "/product" }: { products: ProductType[]; basePath?: string }) => {
    return (
        <div className={styles.produk}>
            <h1 className={styles.produk__title}>Daftar Produk</h1>

            <div className={styles.produk__content}>
                {products?.length > 0 ? (
                    products.map((product: ProductType) => (
                        <Link
                            href={`${basePath}/${product.id}`}
                            key={product.id}
                            className={styles.produk__content__item}
                        >
                            <div className={styles.produk__content__item__image}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>

                            <div className={styles.produk__content__item__info}>
                                <h4 className={styles.produk__content__item__name}>
                                    {product.name}
                                </h4>

                                <p className={styles.produk__content__item__category}>
                                    {product.category}
                                </p>

                                <p className={styles.produk__content__item__price}>
                                    Rp {formatPrice(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div className={styles.produk__content__skeleton} key={index}>
                            <div className={styles.produk__content__skeleton__image}></div>
                            <div className={styles.produk__content__skeleton__name}></div>
                            <div className={styles.produk__content__skeleton__category}></div>
                            <div className={styles.produk__content__skeleton__price}></div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;