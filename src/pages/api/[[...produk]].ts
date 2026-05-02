import type { NextApiRequest, NextApiResponse } from 'next'
import { retrieveProducts } from '../../utils/db/servicefirebase'

export const getProducts = () => [
    {
        id: 1,
        name: "JYPSEY CNR BLACK SATIN",
        category: "High Heels",
        price: 1699000,
        image: "https://www.stevemadden.id/cdn/shop/files/0888-SVMJYPSEY-C7-1.jpg?v=1766327944&width=800"
    },
    {
        id: 2,
        name: "Chace Leather Chelsea Boots",
        category: "Chelsea Boots",
        price: 22249000,
        image: "https://www.pedroshoes.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-pd_id-products/default/dw9c58820a/images/hi-res/2025-L7-PM1-96600014-01-1.jpg?sw=1152&sh=1536"
    },
    {
        id: 3,
        name: "PUMA Speedcat Aere Sneakers Unisex",
        category: "Sneakers Unisex",
        price: 1899000,
        image: "https://dynamic.zacdn.com/4vjcFl6vOlWSVVa8rdTKQZ2sQ7s=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/puma-7659-1007035-1.jpg"
    },
    {
        id: 4,
        name: "Nathon Oxford Shoes",
        category: "Oxford Shoes",
        price: 1574250,
        image: "https://dynamic.zacdn.com/gkRENtnhxzI4u_w3IOvSpt7K1UI=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/aldo-1262-6335753-1.jpg"
    },
    {
        id: 5,
        name: "Converse Star Player 76 Premium Canvas",
        category: "Skate Shoes",
        price: 1199000,
        image: "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA16016C00Y09H-1.jpg"
    },
    {
        id: 6,
        name: "Mary Jane Creeper Platform Shoe",
        category: "Lifestyle",
        price: 1293825,
        image: "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,e_unsharp_mask:100,w_458/dpr_2.0/v1742246039/VN000D07L37-HERO/Mary-Jane-Creeper-Platform-Shoe-VANS-Grunge-Core-Black-Leather-HERO.png"
    }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await retrieveProducts('products'); // Asumsi collection name 'products'
        const { produk } = req.query;

        if (produk && produk.length > 0) {
            const productId = Array.isArray(produk) ? produk[0] : produk;
            const product = products.find((item: any) => item.id?.toString() === productId.toString());

            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            return res.status(200).json({ data: product });
        }

        res.status(200).json({ data: products })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}