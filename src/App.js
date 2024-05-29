import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";
import ProfilePage from "./page/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
