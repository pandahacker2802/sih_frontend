import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/static/Header";
import Sidebar from "./components/static/Sidebar";

// Dashboard
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/AI_Workspace";
import Tasks from "./pages/Tasks";
import Knowledge from "./pages/Knowlegde_Hub";

// Other Pages
import Approvals from "./pages/Approvals";
import Deliverables from "./pages/Deliverables";
import Documents from "./pages/Documents";
import SecurityCenter from "./pages/Security_Center";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Header />
        <Routes>

        {/* =========================
            DASHBOARD
        ========================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard/workspace"
          element={<Workspace />}
        />

        <Route
          path="/dashboard/tasks"
          element={<Tasks />}
        />

        <Route
          path="/dashboard/knowledge"
          element={<Knowledge />}
        />


        {/* =========================
            OTHER PAGES
        ========================= */}

        <Route
          path="/approvals"
          element={<Approvals />}
        />

        <Route
          path="/deliverables"
          element={<Deliverables />}
        />

        <Route
          path="/documents"
          element={<Documents />}
        />

        <Route
          path="/security"
          element={<SecurityCenter />}
        />


        {/* =========================
            DEFAULT ROUTE
        ========================= */}

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />


        {/* =========================
            404 / UNKNOWN ROUTE
        ========================= */}

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

        </Routes>
      </div>
    </div>
  );
}

export default App;