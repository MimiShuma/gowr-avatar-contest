import { supabase } from "../lib/supabaseClient";

function Login() {
    async function login(provider) {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                fontFamily: "Arial",
            }}
        >
            <h1>Login</h1>

            <button onClick={() => login("google")}>
                Continue with Google
            </button>

            <button onClick={() => login("discord")}>
                Continue with Discord
            </button>
        </div>
    );


}

export default Login;
