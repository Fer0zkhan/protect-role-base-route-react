import { Route, Routes } from "react-router-dom";
import { About, Analytics, Home, Login, PageNotFound } from "./pages";
import { Navbar } from "./components";
import { AdminRoutes } from "./utils";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route element={<AdminRoutes />}>
          <Route path="/analytics" element={<Analytics />}></Route>
        </Route>

        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
