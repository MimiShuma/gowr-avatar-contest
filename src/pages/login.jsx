function Login() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <h1>Login</h1>

            <button>Login with Discord</button>

            <button>Login with Google</button>
        </div>
    );
}

export default Login;