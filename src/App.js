import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";
import ProfilePage from "./page/ProfilePage";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  const mapKey = process.env.REACT_APP_API_KEY;

  return (
    <NavermapsProvider ncpClientId={mapKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </NavermapsProvider>
  );
}

export default App;
