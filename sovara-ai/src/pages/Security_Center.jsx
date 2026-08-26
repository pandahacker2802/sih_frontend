import { useState } from "react";
import { Check, Download, Group, History, ShieldCheck } from "lucide-react";
import { securityAccessRows as accessRows, securityAuditEvents as auditEvents } from "../data/mockData";

function SecurityCenter() {
  const [feedback, setFeedback] = useState("");

  return (
    <main className="security-page">
      <header className="security-page-header">
        <div><p className="workspace-label">Governance / Local enclave</p><h1>Security Center</h1><p>Monitor local AI sovereignty, audit logs, and access control events.</p></div>
        {/* Backend connection point: GET /api/security/audit-log/export. */}
        <button className="button button-primary" type="button" onClick={() => setFeedback("Audit log export prepared.")}><Download size={17} /> Export Audit Log</button>
      </header>
      {feedback && <div className="export-feedback" role="status">{feedback}</div>}

      <div className="security-grid">
        <section className="security-panel sovereignty-panel">
          <div className="security-panel-heading"><h2><ShieldCheck size={23} /> Sovereignty Status</h2><span className="audit-badge">AUDIT: OK</span></div>
          <div className="sovereignty-metrics">{["External AI API Calls", "Cloud Document Uploads", "External Transfers"].map((label) => <div className="sovereignty-metric" key={label}><span>{label}</span><strong>0</strong></div>)}</div>
          <div className="local-status">{["AI Inference", "Documents", "Embeddings", "Vector Database", "Generated Outputs"].map((label) => <div key={label}><span>{label}</span><b><Check size={15} /> Local</b></div>)}</div>
        </section>

        <section className="security-panel audit-panel">
          <div className="security-panel-heading"><h2><History size={22} /> Audit Timeline</h2></div>
          <div className="audit-list">{auditEvents.map(([time, event, hash]) => <div className={`audit-event${hash === "active" ? " active" : ""}`} key={time}><span className="audit-dot" /><time>{time}</time><p>{event}</p>{hash && hash !== "active" && <b>{hash}</b>}</div>)}</div>
        </section>

        <section className="security-panel access-panel">
          <div className="security-panel-heading"><h2><Group size={22} /> Access Control &amp; Security Events</h2><button className="manage-button" type="button" onClick={() => setFeedback("Role management is ready for backend connection.")}>Manage Roles</button></div>
          <div className="access-table-wrap"><table className="access-table"><thead><tr><th>User</th><th>Role</th><th>Last Access</th><th>Recent Event</th></tr></thead><tbody>{accessRows.map(([user, role, lastAccess, event]) => <tr key={user}><td><span className="user-avatar">{user.split(" ").map((part) => part[0]).join("")}</span>{user}</td><td><b className="role-badge">{role}</b></td><td>{lastAccess}</td><td>{event}</td></tr>)}</tbody></table></div>
        </section>
      </div>
    </main>
  );
}

export default SecurityCenter;
