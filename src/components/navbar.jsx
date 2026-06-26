import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import LoginModal from "./loginmodal";

function Navbar() {
    const navigate = useNavigate();


    const { user, logout } = useAuth();

    const [showLogin, setShowLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "70px",
                    background: "#202225",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 30px",
                    zIndex: 1000,
                    boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                }}
            >
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "24px",
                    }}
                >
                    🦅 GOWR83S
                </Link>

                {!user ? (
                    <button onClick={() => setShowLogin(true)}>
                        LOGIN
                    </button>
                ) : (
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <button
                            onClick={() =>
                                setShowMenu(!showMenu)
                            }
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            {user.user_metadata.avatar_url && (
                                <img
                                    src={user.user_metadata.avatar_url}
                                    alt=""
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                    }}
                                />
                            )}

                            {user.user_metadata.full_name ||
                                user.user_metadata.name ||
                                "User"}
                        </button>

                        {showMenu && (
                            <div
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: "50px",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "8px",
                                    width: "220px",
                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,.2)",
                                    overflow: "hidden",
                                }}
                            >
                                <button
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                    }}
                                    onClick={() => {
                                        navigate("/");
                                        setShowMenu(false);
                                    }}
                                >
                                    🏠 Home
                                </button>

                                <button
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                    }}
                                    onClick={() => {
                                        navigate("/contests");
                                        setShowMenu(false);
                                    }}
                                >
                                    🏆 Contests
                                </button>

                                <button
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                    }}
                                    onClick={() => {
                                        navigate("/results/1");
                                        setShowMenu(false);
                                    }}
                                >
                                    📊 Results
                                </button>

                                <hr />

                                <button
                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                    }}
                                    onClick={logout}
                                >
                                    🚪 Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </nav>

            <LoginModal
                open={showLogin}
                onClose={() => setShowLogin(false)}
            />
        </>
    );


}

export default Navbar;
