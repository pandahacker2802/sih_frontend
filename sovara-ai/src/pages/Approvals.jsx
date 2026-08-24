import React, { useState } from "react";

export default function ApprovalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState("pending");
  const [selectedSource, setSelectedSource] = useState(null);

  return (
    <div className="antialiased min-h-screen flex bg-background text-on-background selection:bg-primary-container/30">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Master Application Shell: SideNavBar */}
      <nav
        className={`fixed left-0 top-0 h-full w-[280px] z-40 bg-surface-container-lowest dark:bg-surface-dim border-r border-outline-variant flex flex-col transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex`}
      >
        <div className="h-xl flex items-center px-gutter shrink-0 border-b border-outline-variant">
          <div className="flex items-center gap-sm">
            <img
              alt="Sovara AI Shield Logo"
              className="w-8 h-8 rounded-sm object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW8rLInF9Ic9UIbL7I2xFD4Ye-tgtmHJiuPk-BlXNas8SXCRd4H6O2i2RtVsvSb9BwvJ2IIuh0NHGxIecdT00s7gmq4i0BKIRna43R6k_83ex1KOUcF9hIlbfjd76LPG-IgvViji5ntdEpw6w2sM6DnTxNFrj2I8kigJLAOVWuWMXh-w9VbiA-V76_yTivXlN7DHxvU2auvhFxGO8l3Erm38Hg2K9Wm3uLNWe_G-tjL6HSfuHvAsKr3g"
            />
            <div className="flex flex-col">
              <h1 className="font-display-md text-[20px] text-on-surface tracking-tighter leading-none">
                SOVARA AI
              </h1>
              <span className="font-label-mono text-[10px] text-primary/70 uppercase tracking-widest">
                Sovereign Intelligence
              </span>
            </div>
          </div>
        </div>

        <div className="p-md shrink-0 border-b border-outline-variant">
          <button className="w-full bg-primary-container text-on-primary font-button text-button py-sm px-md rounded flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Workspace
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-md space-y-md font-body-sm text-body-sm tracking-tight">
          <div>
            <h3 className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant px-sm mb-xs">
              Main
            </h3>
            <div className="flex flex-col gap-base">
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  layout_dashboard
                </span>
                Dashboard
              </a>
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  sparkles
                </span>
                AI Workspace
              </a>
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  list_alt
                </span>
                Tasks
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant px-sm mb-xs">
              Knowledge
            </h3>
            <div className="flex flex-col gap-base">
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  library_books
                </span>
                Knowledge Hub
              </a>
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  description
                </span>
                Documents
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant px-sm mb-xs">
              Outputs
            </h3>
            <div className="flex flex-col gap-base">
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  north_east
                </span>
                Deliverables
              </a>
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-primary font-bold bg-primary-container border-r-2 border-primary duration-150 ease-in-out"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                Approvals
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant px-sm mb-xs">
              Governance
            </h3>
            <div className="flex flex-col gap-base">
              <a
                className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  shield_with_heart
                </span>
                Security Center
              </a>
            </div>
          </div>
        </div>

        <div className="mt-auto p-md border-t border-outline-variant shrink-0">
          <a
            className="flex items-center gap-sm px-sm py-xs rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors mb-sm"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            Settings
          </a>
          <div className="space-y-xs">
            <div className="flex items-center gap-sm font-label-mono text-[10px] text-primary/70 uppercase">
              <span className="material-symbols-outlined text-[12px] animate-pulse">
                fiber_manual_record
              </span>
              LOCAL AI ONLINE
            </div>
            <div className="flex items-center gap-sm font-label-mono text-[10px] text-on-surface-variant uppercase">
              <span className="material-symbols-outlined text-[12px]">
                lock
              </span>
              SECURITY ACTIVE
            </div>
          </div>
        </div>
      </nav>

      {/* Master Application Shell: Main Content Area */}
      <div className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-hidden bg-background">
        {/* Master Application Shell: TopAppBar */}
        <header className="h-xl shrink-0 bg-surface border-b border-outline-variant flex items-center justify-between px-gutter relative z-30">
          <div className="flex items-center gap-md">
            <button
              className="p-xs text-on-surface md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-display-lg text-display-lg text-on-surface block md:hidden">
              Sovara AI
            </span>
            {/* Breadcrumbs */}
            <div className="hidden md:flex items-center gap-xs font-label-mono text-label-mono uppercase text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#">
                Home
              </a>
              <span className="text-outline-variant">/</span>
              <span className="text-primary">Approvals</span>
            </div>
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant">
            <button className="p-xs hover:text-primary transition-colors hover:bg-surface-container rounded-full">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button className="p-xs hover:text-primary transition-colors hover:bg-surface-container rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-xs hover:text-primary transition-colors hover:bg-surface-container rounded-full">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-xs hover:text-primary transition-colors rounded-full">
              <img
                alt="User profile"
                className="w-8 h-8 rounded-full border border-outline-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZg42bXX2sp1Oog5_mujTGs9_pLe752K5oOrQKJqO1yjcop48wnkPuuItF2C_TiimfUlq5uOJs31fXg9cBQMdzbbdxz4oHlPbuuZ0xuSxLMyYS_yjksOJY8jOWfU7F7ihscV5T4TMJEBkvP_54D1xXVcpMosbHmAhm59ll8oJtE1vTGFzU6bp7eyfKVRG1bnUqns0Hk6jLuHDyqfGnaG2Wi4UGl9b4yfGP8WU6rx_KgHcemtdrM8aOug"
              />
            </button>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="flex-1 overflow-auto p-gutter lg:p-margin flex flex-col gap-md">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-md mb-sm shrink-0">
            <div>
              <div className="font-label-mono text-label-mono text-primary mb-xs uppercase flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]">
                  fact_check
                </span>
                Human-in-the-loop Review
              </div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Inspection Note Authorization
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-sm">
              {approvalStatus !== "pending" && (
                <span className="font-label-mono text-xs uppercase px-sm py-xs rounded bg-surface-container border border-outline-variant text-primary">
                  Status: {approvalStatus.replace("_", " ")}
                </span>
              )}

              <button
                onClick={() => setApprovalStatus("revision_requested")}
                className="font-button text-button px-md py-xs rounded border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
              >
                Request Revision
              </button>
              <button
                onClick={() => setApprovalStatus("rejected")}
                className="font-button text-button px-md py-xs rounded bg-surface-container-high border border-outline-variant text-error hover:bg-error/10 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => setApprovalStatus("approved")}
                className="font-button text-button px-md py-xs rounded bg-primary-container text-on-primary hover:bg-primary-fixed transition-colors flex items-center gap-xs"
              >
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Approve Note
              </button>
            </div>
          </div>

          {/* Split Screen Content */}
          <div className="flex flex-col xl:flex-row gap-gutter flex-1 min-h-0">
            {/* LEFT: AI-Generated Output */}
            <div className="flex-1 flex flex-col bg-surface-container rounded border ghost-border overflow-hidden min-h-[500px]">
              <div className="p-sm border-b ghost-border bg-surface-container-high flex justify-between items-center">
                <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider">
                  Draft Output
                </span>
                <span className="bg-surface border border-outline-variant px-2 py-1 rounded text-[10px] font-label-mono uppercase tracking-wider text-primary flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[12px] text-primary">
                    auto_awesome
                  </span>
                  Generated by Sovara
                </span>
              </div>
              <div className="p-lg flex-1 overflow-y-auto font-body-md text-body-md text-on-surface leading-relaxed">
                <h3 className="font-headline-lg text-[24px] mb-md text-on-surface">
                  Site Inspection Report: Sector 4 Alpha
                </h3>
                <p className="mb-sm text-on-surface-variant font-label-mono text-label-mono">
                  Date: 2023-10-27 | Inspector: Automated Drone Unit 7 &amp; Sovara AI Analysis
                </p>
                <div className="space-y-md mt-md">
                  <p className="citation-border pl-md">
                    Initial structural scans indicate{" "}
                    <span
                      className="bg-primary/20 text-primary-fixed-dim px-1 rounded cursor-help"
                      title="Confidence: 94%"
                    >
                      minor micro-fractures
                    </span>{" "}
                    along the primary support beam in Quadrant B. These anomalies
                    are currently within acceptable tolerance levels for industrial
                    operations but warrant continued monitoring over the next fiscal
                    quarter.
                  </p>
                  <p>
                    Environmental sensors reported normal atmospheric readings.
                    However, thermal imaging identified an anomalous heat
                    signature near the secondary coolant line.
                  </p>
                  <div className="bg-surface-container-high p-sm rounded border ghost-border mt-sm">
                    <h4 className="font-label-mono text-label-mono text-primary mb-xs uppercase">
                      Actionable Recommendation
                    </h4>
                    <p className="text-sm">
                      Dispatch engineering team to verify thermal variance at
                      secondary coolant line (Coords: X14.Y9). Schedule
                      preventative maintenance for support beam Quadrant B within
                      90 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Supporting Evidence */}
            <div className="w-full xl:w-[400px] flex flex-col gap-md shrink-0">
              {/* Confidence Metrics */}
              <div className="bg-surface-container rounded border ghost-border p-md">
                <h4 className="font-label-mono text-label-mono text-on-surface uppercase mb-md">
                  Analysis Confidence
                </h4>
                <div className="space-y-sm">
                  <div>
                    <div className="flex justify-between font-label-mono text-label-mono mb-xs">
                      <span className="text-on-surface-variant">
                        Structural Assessment
                      </span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1">
                      <div
                        className="bg-primary h-1 rounded-full"
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-mono text-label-mono mb-xs">
                      <span className="text-on-surface-variant">
                        Thermal Anomaly Verification
                      </span>
                      <span className="text-tertiary">78%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1">
                      <div
                        className="bg-tertiary h-1 rounded-full"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Sources Log */}
              <div className="bg-surface-container rounded border ghost-border flex-1 flex flex-col min-h-0 overflow-hidden">
                <div className="p-sm border-b ghost-border bg-surface-container-high">
                  <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider">
                    Audit Trail &amp; Sources
                  </span>
                </div>
                <div className="p-sm flex-1 overflow-y-auto space-y-xs max-h-[300px] xl:max-h-none">
                  {/* Log Item 1 */}
                  <div
                    onClick={() => setSelectedSource("Drone_Scan_Log_7.json")}
                    className="p-xs hover:bg-surface-container-high rounded transition-colors border-l border-transparent hover:border-primary group cursor-pointer"
                  >
                    <div className="flex items-center gap-xs mb-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        description
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        Drone_Scan_Log_7.json
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface text-sm line-clamp-2">
                      "Micro-fractures detected. Severity: 0.2mm depth. Quadrant B
                      support structures."
                    </p>
                    <div className="mt-1 font-label-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Source Document
                    </div>
                  </div>

                  <hr className="border-outline-variant" />

                  {/* Log Item 2 */}
                  <div
                    onClick={() =>
                      setSelectedSource("Thermal_Sensor_Array_B.csv")
                    }
                    className="p-xs hover:bg-surface-container-high rounded transition-colors border-l border-transparent hover:border-primary group cursor-pointer"
                  >
                    <div className="flex items-center gap-xs mb-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        thermostat
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        Thermal_Sensor_Array_B.csv
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface text-sm line-clamp-2">
                      "Delta T of +4.2C observed near coolant valve 3 compared to
                      baseline."
                    </p>
                    <div className="mt-1 font-label-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Data Visualization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Audit Detail Modal */}
      {selectedSource && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-md">
          <div className="bg-surface-container border border-outline-variant rounded-xl max-w-lg w-full p-md space-y-sm">
            <div className="flex justify-between items-center border-b border-outline-variant pb-xs">
              <h4 className="font-label-mono text-sm text-primary uppercase">
                Source File: {selectedSource}
              </h4>
              <button
                onClick={() => setSelectedSource(null)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="bg-surface-container-lowest p-sm rounded font-label-mono text-xs text-on-surface-variant overflow-x-auto">
              {selectedSource.endsWith(".json") ? (
                <pre>{`{\n  "timestamp": "2023-10-27T08:14:22Z",\n  "unit": "Drone Unit 7",\n  "quadrant": "B",\n  "anomaly": "Micro-fracture",\n  "depth_mm": 0.2,\n  "tolerance_check": "PASS_WITH_WARNING"\n}`}</pre>
              ) : (
                <pre>{`timestamp,sensor_id,valve_id,delta_temp_c,status\n2023-10-27 08:14:20,TS-04,VALVE-03,+4.2,ALERT`}</pre>
              )}
            </div>
            <div className="flex justify-end pt-xs">
              <button
                onClick={() => setSelectedSource(null)}
                className="font-button text-xs px-md py-xs rounded bg-surface-container-high border border-outline-variant text-on-surface"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}