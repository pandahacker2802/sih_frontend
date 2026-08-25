import { Check } from "lucide-react";
import { notifications } from "../data/mockData";

function Notifications() {
  return (
    <main className="account-page">
      <header className="account-header"><div><p className="workspace-label">Workspace / Activity</p><h1>Notifications</h1><p>Review important changes across your Sovara workspace.</p></div>{/* Endpoint hook: POST /api/notifications/read-all. */}<button className="button button-secondary" type="button"><Check size={16} /> Mark all read</button></header>
      <section className="account-panel notification-panel"><div className="security-panel-heading"><h2>Recent notifications</h2><span className="audit-badge">3 EVENTS</span></div><div className="notification-list">{notifications.map(([title, message, time, Icon, unread]) => <article className={`notification-row${unread ? " unread" : ""}`} key={title}><span className="notification-icon"><Icon size={18} /></span><div><strong>{title}</strong><p>{message}</p><time>{time}</time></div>{unread && <i className="notification-dot" />}</article>)}</div></section>
    </main>
  );
}

export default Notifications;
