import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import JoinUs from "./pages/JoinUs";
import Employee from "./pages/Employee";
import Header from "./components/Header";

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Outlet />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/joinus" element={<JoinUs />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;