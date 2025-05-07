import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuestionPage } from "./pages/QuestionPage";
import { AddQuestionPage, AddQuestionPageLazy } from "./pages/AddQuestionPage";
import { Login } from "./pages/Login";
import { EditQuestionPage } from "./pages/EditQuestionPage/EditQuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-question" element={<AddQuestionPageLazy />} />
          <Route path="/edit-question/:id" element={<EditQuestionPage />} />
          <Route path="/forbidden" element={<div>forbidden</div>} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
