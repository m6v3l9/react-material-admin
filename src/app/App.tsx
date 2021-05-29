import usePageTracking from "../core/hooks/usePageTracking";
import AppProvider from "./AppProvider";
import AppRoutes from "./AppRoutes";

function App() {
  usePageTracking();

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
