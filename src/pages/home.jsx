import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function Home() {
    const navigate = useNavigate();
    const { user, loading, logout } = useAuth();


    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
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
            <h1>GOWR83S</h1>

            <p>Vote for your favorite avatars created by the community.</p>

            {!user ? (
                <>
                    <button onClick={() => navigate("/login")}>
                        Continue with Google
                    </button>

                    <button onClick={() => navigate("/login")}>
                        Continue with Discord
                    </button>
                </>
            ) : (
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
                        Welcome,{" "}
                        {user.user_metadata.full_name ||
                            user.user_metadata.name ||
                            "User"}
                        !
                    </h2>

                    <p>{user.email}</p>

                    <button onClick={() => navigate("/contests")}>
                        Browse Contests
                    </button>

                    <button onClick={logout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );


}

export default Home;
