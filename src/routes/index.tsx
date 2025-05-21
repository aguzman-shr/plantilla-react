import { useAuth } from "@/hooks/useAuth";
import PrivateRoutes from "@/routes/private/routes";
import PublicRoutes from "@/routes/public/routes";

export default function Routes() {
    const { token } = useAuth();
    return token ? <PrivateRoutes /> : <PublicRoutes />
}