import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function Home() {
    const navigate = useNavigate();


    const { user, loading } = useAuth();

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
        <div
            style={{
                minHeight: "calc(100vh - 80px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                fontFamily: "Arial",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1>🦅 GOWR83S</h1>

            <h2>God of War Realm</h2>

            <h3>Community Portal</h3>

            <p>
                Choose your favorite community creations.
                <br />
                Sign in with Google or Discord to participate in avatar contests.
            </p>

            {user ? (
                <>
                    {user.user_metadata.avatar_url && (
                        <img
                            src={user.user_metadata.avatar_url}
                            alt="Profile"
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                            }}
                        />
                    )}

                    <h2>
                        Welcome{" "}
                        {user.user_metadata.full_name ||
                            user.user_metadata.name ||
                            "User"}
                    </h2>

                    <p>{user.email}</p>

                    <button
                        style={{
                            padding: "12px 30px",
                            fontSize: "18px",
                        }}
                        onClick={() => navigate("/contests")}
                    >
                        Browse Contests
                    </button>
                </>
            ) : (
                <p>
                    Click the <strong>LOGIN</strong> button in the navigation bar
                    to sign in.
                </p>
            )}
        </div>
    );


}

export default Home;
