import Navbar from "../components/navbar";

function Layout({ children }) {
    return (
        <> <Navbar />


            <main
                style={{
                    paddingTop: "80px",
                }}
            >
                {children}
            </main>
        </>
    );


}

export default Layout;
