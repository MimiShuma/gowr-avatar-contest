import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/layout";

import Home from "./pages/home";
import Login from "./pages/login";
import Contests from "./pages/contests";
import Contest from "./pages/contest";
import Results from "./pages/results";

import ProtectedRoute from "./components/protectedroute";

function App() {
  return (<BrowserRouter> <Layout> <Routes>
    <Route
      path="/"
      element={<Home />}
    />


    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/contests"
      element={
        <ProtectedRoute>
          <Contests />
        </ProtectedRoute>
      }
    />

    <Route
      path="/contest/:id"
      element={
        <ProtectedRoute>
          <Contest />
        </ProtectedRoute>
      }
    />

    <Route
      path="/results/:id"
      element={
        <ProtectedRoute>
          <Results />
        </ProtectedRoute>
      }
    />
  </Routes>
  </Layout>
  </BrowserRouter>
  );


}

export default App;
