import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<div>home</div>} />
        <Route path="/add-question" element={<div>add ?</div>} />
        <Route path="/forbidden" element={<div>forbidden</div>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
