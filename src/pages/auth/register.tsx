import Link from "next/link";

const halamanRegister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>

            <p>Sudah punya akun?</p>

            <Link href="/auth/login">
                Login
            </Link>
        </div>
    );
};

export default halamanRegister;