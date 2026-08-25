import { Activity, ClipboardCheck, Plus, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { dashboardActivity as activity, dashboardApprovals, dashboardMetrics as metrics, systemStatuses as statuses } from "../data/mockData";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow"><Sparkles size={14} /> Sovereign intelligence</p>
          <h1>Good morning, Alex.</h1>
          <p className="subtitle">Your workspace is ready.</p>
        </div>
        <div className="header-actions">
          <button className="button button-secondary">View Reports</button>
          <button className="button button-primary"><Plus size={17} /> Quick Action</button>
        </div>
      </header>

      <section className="metric-grid" aria-label="Workspace metrics">
        {metrics.map(([label, value, note, Icon], index) => (
          <article className={`metric-card${index === 1 ? " metric-card-accent" : ""}`} key={label}>
            <div className="card-label"><span>{label}</span><Icon size={19} /></div>
            <strong>{value}</strong>
            <span className="card-note">{note}</span>
          </article>
        ))}
      </section>

      <section className="middle-grid">
        <article className="panel activity-panel">
          <div className="panel-heading"><div><p className="eyebrow">System pulse</p><h2>AI activity <span>(last 7 days)</span></h2></div><Activity size={19} className="heading-icon" /></div>
          <div className="chart-wrap">
            <svg className="activity-chart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="AI activity trend">
              <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#ffb784" stopOpacity=".28" /><stop offset="1" stopColor="#ffb784" stopOpacity="0" /></linearGradient></defs>
              <path d="M0 80 Q20 70 40 50 T70 40 T100 20 L100 100 L0 100Z" fill="url(#chart-fill)" />
              <path d="M0 80 Q20 70 40 50 T70 40 T100 20" fill="none" stroke="#ffb784" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="70" cy="40" r="2.6" fill="#ffb784" />
            </svg>
            <div className="chart-days">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div>
          </div>
        </article>

        <article className="panel recent-panel">
          <div className="panel-heading"><h2>Recent activity</h2><Zap size={18} className="heading-icon" /></div>
          <ul className="activity-list">{activity.map(([text, time, tone]) => <li key={text}><span className={`activity-dot ${tone}`} /><div><p>{text}</p><time>{time}</time></div></li>)}</ul>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="panel">
          <div className="panel-heading"><h2>System status</h2><ShieldCheck size={18} className="heading-icon" /></div>
          <div className="status-list">{statuses.map(([name, status, tone]) => <div className="status-row" key={name}><span>{name}</span><b className={`status-pill ${tone}`}>{status}</b></div>)}</div>
        </article>
        <article className="panel">
          <div className="panel-heading"><h2>Pending approvals</h2><ClipboardCheck size={18} className="heading-icon" /></div>
          <div className="approval-list">
            {dashboardApprovals.map(([title, detail]) => <Approval title={title} detail={detail} key={title} />)}
          </div>
        </article>
      </section>
    </main>
  );
}

function Approval({ title, detail }) {
  return <div className="approval-row"><div><p>{title}</p><span>{detail}</span></div><button className="review-button">Review</button></div>;
}

export default Dashboard;
