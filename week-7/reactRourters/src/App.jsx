import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const LandingPage = lazy(() => import("./components/LandingPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Suspense fallback={"loading...."}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/LandingPage"
          element={
            <Suspense fallback={"loading..."}>
              <LandingPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
