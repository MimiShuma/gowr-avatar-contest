import { supabase } from "../lib/supabaseClient";

function LoginModal({ open, onClose }) {
    if (!open) return null;

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
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    width: "320px",
                    textAlign: "center",
                }}
            >
                <h2>Sign In</h2>

                <button
                    style={{ width: "100%", marginBottom: "10px" }}
                    onClick={() => login("google")}
                >
                    Continue with Google
                </button>

                <button
                    style={{ width: "100%", marginBottom: "20px" }}
                    onClick={() => login("discord")}
                >
                    Continue with Discord
                </button>

                <button
                    style={{ width: "100%" }}
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );


}

export default LoginModal;
