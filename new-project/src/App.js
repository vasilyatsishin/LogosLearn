import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Er404 from "./pages/404";
import { RouteConst } from "./common/RouterConst";
import VasylPage from "./pages/Vasyl/VasylPage";
import { showNavbar } from "./utils";
import Page from "./pages/Vasyl/Page";

const App = () => {
  // const path = useLocation().pathname;
  localStorage.setItem("isAdmin", true);
  return (
    <>
      {/* {showNavbar(path) && <h1>HEADER</h1>} Todo create Link to your page */}
      <p>kur</p>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="page" element={<Page />} />
          <Route path="page/vasylpage" element={<VasylPage />} />
          <Route path="*" element={<Er404 />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};

// const AppContainer = () => (
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// );

// export default AppContainer;

export default App;
