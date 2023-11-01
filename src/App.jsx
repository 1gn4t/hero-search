import { Route, Routes } from "react-router-dom";
import Container from "./components/container/Container";
import ErrorPage from "./components/error-page/ErrorPage";
import Powerstatus from "./components/powerstatus/Powerstatus";
import Biography from "./components/biography/Biography";
import Appearance from "./components/appearance/Appearance";
import Connections from "./components/connections/Connections";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Powerstatus />} />
        <Route path="biography" element={<Biography />} />
        <Route path="appearance" element={<Appearance />} />
        <Route path="connections" element={<Connections />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
