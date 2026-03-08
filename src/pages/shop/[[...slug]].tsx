import { useRouter } from "next/router";

const HalamanToko = () => {
    const { query } = useRouter();
    const slug = query.slug;

    return (
        <div>
            <h1>Halaman Toko</h1>

            <p>
                Toko: {slug ? slug[0] + "-" + slug[1] : ""}
            </p>

            <p>
                Kategori: {slug ? slug[0] : "Semua Kategori"}
            </p>
        </div>
    );
};

export default HalamanToko;