import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import JoinUs from "./pages/JoinUs";
import Employee from "./pages/Employee";
import Header from "./components/Header";
import Register from "./pages/Register";
import TimeTable from "./pages/TimeTable";
import Commute from "./pages/Commute";

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Outlet />
            <Routes>
                <Route path="/Main" element={<Main />} />
                <Route path="/" element={<Auth />} />
                <Route path="/joinus" element={<JoinUs />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/commute" element={<Commute />} />
                <Route path="/register" element={<Register />} />
                <Route path="/timetable" element={<TimeTable />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;