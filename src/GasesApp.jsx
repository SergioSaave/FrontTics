import { AuthProvider } from "./auth/context/Auth";
import { AppRouter } from "./router/AppRouter";

function GasesApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default GasesApp;
