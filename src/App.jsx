import { Route, Routes } from "react-router-dom";

import "./API/firebase";

import Container from "./components/container/Container";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import HomePage from "./page/HomePage/HomePage";
import AuthPage from "./page/AuthPage/AuthPage";
import SearchPage from "./page/SearchPage/SearchPage";
import { useSelector } from "react-redux";
import { selectUser } from "./store/user/user.selectors";

function App() {
  const user = useSelector(selectUser);
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        {user && <Route path="search" element={<SearchPage />} />}
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
