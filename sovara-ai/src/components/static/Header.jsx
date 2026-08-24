import { Link, useLocation } from "react-router-dom";
import { Bell, Search, UserRound } from "lucide-react";

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
    "/profile": "Profile",
    "/notifications": "Notifications",
  };

  const currentPage = pageNames[location.pathname] || "Sovara AI";
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

        {/* Divider */}
        <div className="header-divider"></div>

        {/* Actions */}
        <div className="header-icon-actions">

          {/* Search */}
          <button className="header-icon-button" aria-label="Search"><Search size={18} /></button>

          {/* Notifications */}
          <Link className="header-icon-button" to="/notifications" aria-label="Notifications"><Bell size={18} /></Link>

          {/* Profile */}
          <Link className="profile-button" to="/profile" aria-label="Profile"><UserRound size={17} /></Link>

        </div>
      </div>

    </header>
  );
}

export default Header;