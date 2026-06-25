function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      fontFamily: "Arial"
    }}>
      <h1>GOWR Avatar Contest</h1>

      <p>
        Vote for your favorite avatars created by the community.
      </p>

      <button>
        Login with Discord
      </button>

      <button>
        Login with Google
      </button>
    </div>
  );
}

export default App;