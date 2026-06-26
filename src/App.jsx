import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Contests from "./pages/contests";
import Contest from "./pages/contest";
import Results from "./pages/results";

import ProtectedRoute from "./components/protectedroute";

function App() {
  return (<BrowserRouter> <Routes>
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
  </BrowserRouter>
  );


}

export default App;
