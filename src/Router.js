import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import JoinUs from "./pages/JoinUs";
import Employee from "./pages/Employee";
import Header from "./components/Header";
import Register from "./pages/Register";
import TimeTable from "./pages/TimeTable";
import Commute from "./pages/Commute";
import SelectStore from "./pages/SelectStore";
import { useRecoilValue } from "recoil";
import { toggle } from "./Atom";

const Router = () => {
  const routerToggle = useRecoilValue(toggle);
  return (
    <BrowserRouter>
      {routerToggle ? (
        <>
      <Header />
      <Outlet />
      </>
      ) : null}
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/select" element={<SelectStore />} />
        <Route path="/main" element={<Main />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/commute" element={<Commute />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
