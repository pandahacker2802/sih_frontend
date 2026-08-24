import { Link, useLocation } from "react-router-dom";
import { Bell, Plus, Search, Upload, UserRound } from "lucide-react";

function Header() {
  const location = useLocation();

  const pageNames = {
    "/dashboard": "Dashboard",
    "/dashboard/workspace": "AI Workspace",
    "/dashboard/tasks": "Tasks",
    "/dashboard/knowledge": "Knowledge Hub",
    "/documents": "Documents",
    "/deliverables": "Deliverables",
    "/approvals": "Approvals",
    "/security": "Security Center",
    "/settings": "Settings",
  };

  const currentPage = pageNames[location.pathname] || "Sovara AI";
  const isDocumentsPage = location.pathname === "/documents";

  return (
    <header className="app-header">

      {/* Breadcrumb */}
      <div className="header-breadcrumb">
        <div>

          <Link
            to="/dashboard"
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>

          <span className="breadcrumb-divider">/</span>

          <span className="breadcrumb-current">{currentPage}</span>

        </div>
      </div>

      {/* Right Side */}
      <div className="header-actions">

        <button className="header-task-button">{isDocumentsPage ? <Upload size={17} /> : <Plus size={17} />} {isDocumentsPage ? "Upload Documents" : "New Task"}
        </button>

        {/* Divider */}
        <div className="header-divider"></div>

        {/* Actions */}
        <div className="header-icon-actions">

          {/* Search */}
          <button className="header-icon-button" aria-label="Search"><Search size={18} /></button>

          {/* Notifications */}
          <button className="header-icon-button" aria-label="Notifications"><Bell size={18} /></button>

          {/* Profile */}
          <button className="profile-button" aria-label="Profile"><UserRound size={17} /></button>

        </div>
      </div>

    </header>
  );
}

export default Header;