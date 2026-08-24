import React, { useState } from 'react';

// Data definitions for modularity
const sovereigntyMetrics = [
  { label: 'External AI API Calls', value: '0' },
  { label: 'Cloud Document Uploads', value: '0' },
  { label: 'External Transfers', value: '0' },
];

const sovereigntyItems = [
  { label: 'AI Inference', status: 'Local' },
  { label: 'Documents', status: 'Local' },
  { label: 'Embeddings', status: 'Local' },
  { label: 'Vector Database', status: 'Local' },
  { label: 'Generated Outputs', status: 'Local' },
];

const auditLogs = [
  { time: '14:32:01 UTC', text: 'Document uploaded:', detail: 'Project_Alpha_Specs.pdf', hash: 'HASH: 8f4e9a...' },
  { time: '14:32:05 UTC', text: 'Local embedding generation started.' },
  { time: '14:32:45 UTC', text: 'Local embedding complete. Added to Vector DB.' },
  { time: '14:35:12 UTC', text: 'Inference query executed against Vector DB.' },
  { time: '14:35:15 UTC', text: 'Output generated and securely stored.', highlight: true },
];

const accessUsers = [
  {
    name: 'A. Mercer',
    role: 'ADMIN',
    lastAccess: 'Today, 14:00',
    event: 'Policy updated',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxgscj0K36Pmgiy-8bVmdXnCqRC0mmL4zVkzR2DAP8DdCvCPa-a8mnle0ZVxIAoHFLMjI4RrBk7GDzsEBdBbcKlXhnXw2gZkJBNoPWwoFhjOcbD6H6deE9SHRFibADBcfXImulib1_6kfNE3khb9umJ7Mfnh7WPB7qKRpEAmyUE5OEzaMT8L_neq_jXdcELROoK-8zfAQACh46I0ZmTiFkG_jPItQO-oSfRcL_0bVOfYAEE6ILSebSzw'
  },
  {
    name: 'E. Jenson',
    role: 'ANALYST',
    lastAccess: 'Yesterday, 09:15',
    event: 'Inference query executed',
    initials: 'EJ'
  },
  {
    name: 'S. Rossi',
    role: 'VIEWER',
    lastAccess: '2 days ago',
    event: 'Report downloaded',
    initials: 'SR'
  }
];

export default function SecurityCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex bg-background text-on-surface font-body-md antialiased">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-[280px] z-40 flex flex-col gap-xs p-md bg-surface-container-lowest border-r border-outline-variant/30 flat">
        <div className="mb-lg">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center ghost-border">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
            </div>
            <div>
              <h1 className="font-display-md text-display-md text-on-surface tracking-tighter leading-none">
                SOVARA AI
              </h1>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                Sovereign Intelligence
              </span>
            </div>
          </div>
        </div>

        <button className="w-full bg-primary-container text-on-primary-container font-button text-button py-sm px-md rounded-DEFAULT hover:opacity-90 transition-opacity mb-md flex items-center justify-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Workspace
        </button>

        <div className="flex-1 flex flex-col gap-base font-body-sm text-body-sm tracking-tight">
          <div className="space-y-md">
            <div>
              <div className="px-sm py-xs font-label-mono text-[10px] uppercase tracking-widest text-outline-variant mb-xs">
                Main
              </div>
              <div className="flex flex-col gap-base">
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">dashboard</span>
                  Dashboard
                </a>
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  AI Workspace
                </a>
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">checklist</span>
                  Tasks
                </a>
              </div>
            </div>

            <div>
              <div className="px-sm py-xs font-label-mono text-[10px] uppercase tracking-widest text-outline-variant mb-xs">
                Knowledge
              </div>
              <div className="flex flex-col gap-base">
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">library_books</span>
                  Knowledge Hub
                </a>
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                  Documents
                </a>
              </div>
            </div>

            <div>
              <div className="px-sm py-xs font-label-mono text-[10px] uppercase tracking-widest text-outline-variant mb-xs">
                Governance
              </div>
              <div className="flex flex-col gap-base">
                <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-primary font-bold bg-primary-container/10 border-r-2 border-primary" href="#">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                  Security Center
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-md border-t border-outline-variant/30">
          <a className="flex items-center gap-sm px-sm py-xs rounded-DEFAULT text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors mb-sm" href="#">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            Settings
          </a>
          <div className="flex items-center gap-xs px-sm py-xs text-on-surface-variant font-label-mono text-label-mono">
            <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              fiber_manual_record
            </span>
            Local Processing Active
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 ml-[280px] flex flex-col relative min-h-screen">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-[280px] z-30 flex items-center justify-between h-xl px-gutter bg-surface-container-lowest border-b border-outline-variant/20 font-label-mono text-label-mono">
          <div className="flex items-center gap-xs font-label-mono text-label-mono uppercase text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Home</a>
            <span className="text-outline-variant">/</span>
            <span className="text-primary">Security Center</span>
          </div>
          <div className="flex items-center gap-sm">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-high border-none rounded-full py-xs pl-lg pr-md text-body-sm w-64 focus:ring-1 focus:ring-primary/30 text-on-surface placeholder:text-on-surface-variant"
                placeholder="Search security logs..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-container">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-container relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-container ghost-border overflow-hidden ml-sm cursor-pointer hover:opacity-80 transition-opacity">
              <img
                alt="User profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChcngYwyq7Phr2NV8CbW7SfTtOKHGVYRM1_jsza9vdcQ-m0P_AYgTo-IoAgR59oVCr23AZIUkip2SsDjPbL-0qz5jWjLGb-AzrrSzyMCw6gLDnA2Zw-Bg3GiNmv0iqEMJ4AeFirCcpjT7-l8GQS5CQ8lJ2pipVLXkeOjSB33cEiO0rnvDoMhMduEyKyuhegFrE06dBqZOYiHLU-J1_HH-yMm44HBUQn_X3s_Ur-BpJ8jkPAy2HJRsrdA"
              />
            </div>
          </div>
        </header>

        {/* Canvas */}
        <main className="flex-1 pt-[88px] px-margin pb-margin overflow-y-auto w-full max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-lg">
            <div className="space-y-xs">
              <h2 className="font-display-lg text-display-lg text-on-surface">Security Center</h2>
              <p className="font-body-md text-on-surface-variant">
                Monitor local AI sovereignty, audit logs, and access control events.
              </p>
            </div>
            <button className="bg-primary-container text-on-primary-container font-button text-button py-sm px-md rounded-DEFAULT hover:opacity-90 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Audit Log
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-md">
            {/* Sovereignty Status Panel */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-lg p-md ghost-border flex flex-col">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm mb-md">
                <h3 className="font-headline-lg text-[24px] leading-tight font-normal text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  Sovereignty Status
                </h3>
                <span className="font-label-mono text-label-mono border border-outline-variant/30 text-on-surface-variant px-xs py-base rounded-sm bg-surface-container-lowest">
                  AUDIT: OK
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-md mb-lg flex-1">
                {sovereigntyMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-surface-container-lowest p-sm rounded-DEFAULT ghost-border-subtle">
                    <div className="font-label-mono text-label-mono text-on-surface-variant mb-xs">
                      {metric.label}
                    </div>
                    <div className="font-display-md text-display-md text-on-surface">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-sm">
                {sovereigntyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm ${
                      idx !== sovereigntyItems.length - 1 ? 'border-b border-outline-variant/20 pb-xs' : ''
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center gap-xs text-primary">
                      <span className="material-symbols-outlined text-[16px]">check</span> {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Timeline */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-lg p-md ghost-border flex flex-col max-h-[600px] overflow-hidden">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm mb-md shrink-0">
                <h3 className="font-headline-lg text-[24px] leading-tight font-normal text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-on-surface-variant">history</span>
                  Audit Timeline
                </h3>
              </div>
              <div className="overflow-y-auto pr-sm space-y-md font-label-mono text-label-mono flex-1 text-[11px] leading-relaxed">
                {auditLogs.map((log, idx) => (
                  <div key={idx} className="relative pl-md border-l border-outline-variant/30">
                    <div
                      className={`absolute left-[-5px] top-1 w-[9px] h-[9px] rounded-full ${
                        log.highlight
                          ? 'bg-primary ghost-border-subtle'
                          : 'bg-surface-container ghost-border'
                      }`}
                      style={log.highlight ? { boxShadow: '0 0 10px rgba(217,122,44,0.3)' } : {}}
                    />
                    <div className="text-on-surface-variant opacity-70 mb-base">{log.time}</div>
                    <div className="text-on-surface">
                      {log.text}
                      {log.detail && (
                        <>
                          <br />
                          {log.detail}
                        </>
                      )}
                    </div>
                    {log.hash && <div className="text-primary mt-base opacity-90">{log.hash}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Access Control */}
            <div className="col-span-12 bg-surface-container-low rounded-lg p-md ghost-border mt-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm mb-md">
                <h3 className="font-headline-lg text-[24px] leading-tight font-normal text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-on-surface-variant">group</span>
                  Access Control & Security Events
                </h3>
                <button className="bg-surface-container-high text-on-surface font-button text-button py-xs px-sm rounded-DEFAULT ghost-border hover:bg-surface-variant transition-colors text-xs">
                  Manage Roles
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/20 font-label-mono text-label-mono text-on-surface-variant">
                      <th className="py-sm px-sm font-medium">User</th>
                      <th className="py-sm px-sm font-medium">Role</th>
                      <th className="py-sm px-sm font-medium">Last Access</th>
                      <th className="py-sm px-sm font-medium">Recent Event</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface">
                    {accessUsers.map((user, idx) => (
                      <tr
                        key={idx}
                        className={`hover:bg-surface-container-highest/50 transition-colors ${
                          idx !== accessUsers.length - 1 ? 'border-b border-outline-variant/10' : ''
                        }`}
                      >
                        <td className="py-sm px-sm flex items-center gap-xs">
                          <div className="w-6 h-6 rounded-full bg-surface-container ghost-border overflow-hidden flex items-center justify-center text-on-surface-variant font-label-mono text-[10px]">
                            {user.avatar ? (
                              <img
                                alt={`${user.name} avatar`}
                                className="w-full h-full object-cover"
                                src={user.avatar}
                              />
                            ) : (
                              user.initials
                            )}
                          </div>
                          {user.name}
                        </td>
                        <td className="py-sm px-sm">
                          <span className="font-label-mono text-[10px] bg-surface-container-high text-on-surface-variant px-xs py-base rounded-sm ghost-border-subtle">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-sm px-sm text-on-surface-variant font-label-mono text-[11px]">
                          {user.lastAccess}
                        </td>
                        <td className="py-sm px-sm text-on-surface-variant">{user.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}