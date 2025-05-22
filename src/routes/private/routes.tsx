import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import PageError from "@/pages/page-error/PageError";

export default function PrivateRoutes() {

    return <BrowserRouter>
        <Routes>
            <>
                <Route path="/" element={< Dashboard />} />
                <Route path="*" element={< PageError />} />
            </>
        </Routes>
    </BrowserRouter>
}