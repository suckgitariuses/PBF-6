import { useRouter } from "next/router";

const halamanLogin = () => {
        const { push } = useRouter();

        const handlerLogin = () => {
            push("/produk");
        };

    return (
        <div>
            <h1>Halaman Login</h1>

            <button onClick={() => handlerLogin()}>
                Login
            </button>

            <p>
                Belum punya akun? 
                <a href="/auth/register"> Register</a>
            </p>
        </div>
    );
};

export default halamanLogin;