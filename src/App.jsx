import { Navigate, Route, Routes } from "react-router-dom";

import "./API/firebase";

import Container from "./components/container/Container";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import HomePage from "./page/HomePage/HomePage";
import AuthPage from "./page/AuthPage/AuthPage";
import SearchPage from "./page/SearchPage/SearchPage";
import PowerstatsPage from "./page/PowerstatsPage/PowerstatsPage";
import BiographyPage from "./page/BiographyPage/BiographyPage";
import AppearancePage from "./page/AppearancePage/AppearancePage";
import ConnectionsPage from "./page/ConnectionsPage/ConnectionsPage";
import { useSelector } from "react-redux";
import { selectUser } from "./store/user/user.selectors";

function App() {
  const user = useSelector(selectUser);
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route
          path="search/*"
          element={<Navigate to={user ? "powerstats" : "/"} />}
        />
        <Route path="search/*" element={<SearchPage />}>
          <Route path=":categories" element={<PowerstatsPage />} />
          <Route path=":categories" element={<BiographyPage />} />
          <Route path=":categories" element={<AppearancePage />} />
          <Route path=":categories" element={<ConnectionsPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
