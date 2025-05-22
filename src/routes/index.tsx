import { useAuth } from "@/modules/core/hooks/use-auth";
import PrivateRoutes from "@/routes/private/routes";
import PublicRoutes from "@/routes/public/routes";

export default function Routes() {
    const { token } = useAuth();
    return token ? <PrivateRoutes /> : <PublicRoutes />
}