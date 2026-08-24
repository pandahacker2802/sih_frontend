import { Bell, Database, LockKeyhole, Save } from "lucide-react";

// Mock data: replace with GET /api/settings.
const settings = [
  ["Local inference", "Keep model execution inside the local enclave", true, LockKeyhole],
  ["Automatic indexing", "Index newly uploaded documents after processing", true, Database],
  ["Approval notifications", "Notify reviewers when an item needs attention", true, Bell],
];

function Settings() {
  return (
    <main className="account-page">
      <header className="account-header"><div><p className="workspace-label">System / Preferences</p><h1>Settings</h1><p>Control workspace behavior and local processing preferences.</p></div>{/* Endpoint hook: PATCH /api/settings with selected preference values. */}<button className="button button-primary" type="button"><Save size={16} /> Save changes</button></header>
      <section className="account-panel settings-panel"><div className="security-panel-heading"><h2>Workspace preferences</h2><span className="audit-badge">LOCAL CONFIG</span></div>{settings.map(([label, description, enabled, Icon]) => <label className="setting-row" key={label}><span className="setting-icon"><Icon size={17} /></span><span className="setting-copy"><strong>{label}</strong><small>{description}</small></span><input type="checkbox" defaultChecked={enabled} /></label>)}</section>
    </main>
  );
}

export default Settings;
