import { supabase } from "../lib/supabaseClient";

function Login() {
    async function loginWithGoogle() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: window.location.origin,
            },
        });

        if (error) {
            console.error(error);
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <h1>Login</h1>

            <button onClick={loginWithGoogle}>
                Continue with Google
            </button>

            <button disabled>
                Discord (Coming Soon)
            </button>
        </div>
    );


}

export default Login;
