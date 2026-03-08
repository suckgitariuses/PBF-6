import { useRouter } from 'next/router'

export default function DetailProduk() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {id}</p>
    </div>
  )
}