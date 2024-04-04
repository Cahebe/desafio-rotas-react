import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Search from "./routes/Home/Search";
import ProfileFound from "./routes/Home/Search/ProfileFound";
import ProfileNotFound from "./routes/Home/Search/ProfileNotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />}>
          <Route path="profilefound" element={<ProfileFound profile={null} />} />
          <Route path="profilenotfound" element={<ProfileNotFound />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
