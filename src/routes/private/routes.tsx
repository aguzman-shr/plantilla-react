import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import PageError from "@/pages/PageError/PageError";

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