import { Check, ClipboardCheck, FileText, ShieldAlert } from "lucide-react";

// Mock data: replace with GET /api/notifications?unread=true.
const notifications = [
  ["Approval requested", "Declassify Q3 Report is waiting for your review.", "12 min ago", ClipboardCheck, true],
  ["Document processed", "Inspection_Report_042.pdf is ready for analysis.", "1 hour ago", FileText, false],
  ["Security event", "A new local access policy was applied.", "Yesterday", ShieldAlert, false],
];

function Notifications() {
  return (
    <main className="account-page">
      <header className="account-header"><div><p className="workspace-label">Workspace / Activity</p><h1>Notifications</h1><p>Review important changes across your Sovara workspace.</p></div>{/* Endpoint hook: POST /api/notifications/read-all. */}<button className="button button-secondary" type="button"><Check size={16} /> Mark all read</button></header>
      <section className="account-panel notification-panel"><div className="security-panel-heading"><h2>Recent notifications</h2><span className="audit-badge">3 EVENTS</span></div><div className="notification-list">{notifications.map(([title, message, time, Icon, unread]) => <article className={`notification-row${unread ? " unread" : ""}`} key={title}><span className="notification-icon"><Icon size={18} /></span><div><strong>{title}</strong><p>{message}</p><time>{time}</time></div>{unread && <i className="notification-dot" />}</article>)}</div></section>
    </main>
  );
}

export default Notifications;
