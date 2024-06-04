import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";
import ProfilePage from "./page/ProfilePage";
import { NavermapsProvider } from "react-naver-maps";
import { RecoilRoot } from "recoil";
import NotificationPage from "./page/NotificationPage";

function App() {
  const mapKey = process.env.REACT_APP_API_KEY;

  return (
    <RecoilRoot>
      <NavermapsProvider ncpClientId={mapKey}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Routes>
        </BrowserRouter>
      </NavermapsProvider>
    </RecoilRoot>
  );
}

export default App;
