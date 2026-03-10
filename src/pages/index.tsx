import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Navbar from '@/components/layouts/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js Pages Router</title>
      </head>
        <h1>Praktikum Next.js Pages Router</h1> <br />
        <p>Mahasiswa D4 Teknik Informarika</p>
    </div>
  )
}

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Selamat Datang di Project Next.js</h1>

//       <Link href="/about">
//         <button style={{ marginTop: "20px" }}>
//           Ke Halaman About
//         </button>
//       </Link>
//     </div>
//   );
// }