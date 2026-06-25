import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

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
            <h1>TESTING HOME PAGE</h1>

            <p>
                Vote for your favorite avatars created by the community.
            </p>

            <button onClick={() => navigate("/login")}>
                Login with Discord
            </button>

            <button onClick={() => navigate("/login")}>
                Login with Google
            </button>
        </div>
    );
}

export default Home;