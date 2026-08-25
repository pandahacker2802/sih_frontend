import { Mail, ShieldCheck, UserRound } from "lucide-react";
import { profile } from "../data/mockData";

function Profile() {
  return (
    <main className="account-page">
      <header className="account-header"><div><p className="workspace-label">Account / Identity</p><h1>Profile</h1><p>Manage the identity attached to your local workspace.</p></div></header>
      <section className="account-grid">
        <article className="account-panel profile-summary"><div className="profile-avatar"><UserRound size={32} /></div><h2>{profile.name}</h2><p>{profile.role}</p><span className="account-badge"><ShieldCheck size={14} /> Local identity</span></article>
        <section className="account-panel profile-details"><div className="security-panel-heading"><h2>Personal details</h2><span className="audit-badge">READ ONLY</span></div><div className="detail-fields"><div><span>Full name</span><strong>{profile.name}</strong></div><div><span>Email address</span><strong><Mail size={15} /> {profile.email}</strong></div><div><span>Organization</span><strong>{profile.organization}</strong></div></div>{/* Endpoint hook: PATCH /api/me when profile editing is enabled. */}<button className="button button-primary" type="button">Edit profile</button></section>
      </section>
    </main>
  );
}

export default Profile;
