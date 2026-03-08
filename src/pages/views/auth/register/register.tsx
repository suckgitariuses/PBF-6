import styles from "./register.module.css";

const TampilanRegister = () => {
    return (
        <div className={styles.container}>
            <h1>Register</h1>

            <input type="text" placeholder="Nama" />
            <br /><br />

            <input type="email" placeholder="Email" />
            <br /><br />

            <input type="password" placeholder="Password" />
            <br /><br />

            <button>Register</button>
        </div>
    );
};

export default TampilanRegister;

// import Link from "next/link";

// const halamanRegister = () => {
//     return (
//         <div>
//             <h1>Halaman Register</h1>

//             <p>Sudah punya akun?</p>

//             <Link href="/auth/login">
//                 Login
//             </Link>
//         </div>
//     );
// };

// export default halamanRegister;