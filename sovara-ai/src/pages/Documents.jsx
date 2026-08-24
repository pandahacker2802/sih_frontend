import React, { useState } from 'react';

const initialDocuments = [
  {
    id: '1',
    name: 'Q4_Strategic_Briefing_v2.pdf',
    type: 'PDF',
    size: '4.2 MB',
    processing: 'Complete',
    processingIcon: 'check_circle',
    processingColor: 'text-primary',
    status: 'COMPLETED',
    statusBg: 'bg-surface-bright border-outline-variant/30 text-on-surface',
    owner: 'J. Vance',
    icon: 'picture_as_pdf',
    iconColor: 'text-primary',
  },
  {
    id: '2',
    name: 'Project_Titan_Requirements.docx',
    type: 'DOCX',
    size: '1.1 MB',
    processing: 'OCR Extracting',
    processingIcon: 'progress_activity',
    processingColor: 'text-outline animate-spin',
    status: 'PENDING',
    statusBg: 'bg-surface-container border-outline-variant/30 text-on-surface-variant',
    owner: 'System',
    icon: 'description',
    iconColor: 'text-on-surface-variant',
  },
  {
    id: '3',
    name: 'Financial_Audit_2023_Final.csv',
    type: 'CSV',
    size: '12.8 MB',
    processing: 'Complete',
    processingIcon: 'check_circle',
    processingColor: 'text-primary',
    status: 'INDEXED',
    statusBg: 'bg-surface-bright border-outline-variant/30 text-on-surface',
    owner: 'E. Stone',
    icon: 'table',
    iconColor: 'text-on-surface-variant',
  },
  {
    id: '4',
    name: 'Corrupted_Archive_Backup.zip',
    type: 'ZIP',
    size: '450 MB',
    processing: 'Failed',
    processingIcon: 'warning',
    processingColor: 'text-error',
    status: 'ERROR',
    statusBg: 'bg-surface-container border-error/30 text-error',
    owner: 'System',
    icon: 'error',
    iconColor: 'text-error',
  },
];

const defaultCollections = ['Q4 Strategy', 'Executive Briefings', '2026 Audits'];

export default function DocumentManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocId, setSelectedDocId] = useState('1');
  const [selectedRows, setSelectedRows] = useState([]);
  const [collections, setCollections] = useState(defaultCollections);
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const activeDoc = initialDocuments.find((doc) => doc.id === selectedDocId) || initialDocuments[0];

  const toggleSelectAll = () => {
    if (selectedRows.length === initialDocuments.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(initialDocuments.map((d) => d.id));
    }
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeCollection = (tag) => {
    setCollections((prev) => prev.filter((item) => item !== tag));
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md antialiased flex overflow-hidden">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-40 border-r border-outline-variant/30 flex flex-col gap-xs p-md bg-surface-container-lowest">
        <div className="mb-lg flex items-center gap-sm px-xs pt-xs">
          <img
            alt="SOVARA AI Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMwSQ7H2Bteu0cu7jY8Edfg4bub3xpZOU-u4MCSzy0IDSgKDNJ9ChXLKctDjl3KE6m7cs9ZoGt5kEUvLS9FEc7uC_W3DNYgLJKgEleq7KqevbjzfVm8I-Oowmcgv90qGPNAYyWPdnQICuvnSqMkSoMy92W32Ojk8WpfWHZDT8e_H4w2J_ahJsf9dE6r8gGX_TWcGmGzvncUwZtrrxHnGmXYJHO7sUdwDOwVst7hoDCmbNam4WyCXkNYA"
          />
          <div>
            <div className="font-display-md text-display-md text-on-surface tracking-tighter leading-none">
              SOVARA AI
            </div>
            <div className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-1">
              Sovereign Intelligence
            </div>
          </div>
        </div>

        <button className="w-full bg-primary-container text-on-surface font-button text-button h-10 rounded-DEFAULT flex items-center justify-center gap-2 mb-md hover:bg-surface-tint transition-colors">
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Workspace
        </button>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
          <div className="mb-4">
            <div className="px-sm py-2 font-label-mono text-[11px] uppercase tracking-wider text-[#8a8278]">
              Main
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>dashboard</span>
                Dashboard
              </a>
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>auto_awesome</span>
                AI Workspace
              </a>
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>checklist</span>
                Tasks
              </a>
            </div>
          </div>

          <div className="mb-4">
            <div className="px-sm py-2 font-label-mono text-[11px] uppercase tracking-wider text-[#8a8278]">
              Knowledge
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>library_books</span>
                Knowledge Hub
              </a>
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-primary font-bold bg-primary-container/10 border-r-2 border-primary" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>description</span>
                Documents
              </a>
            </div>
          </div>

          <div className="mb-4">
            <div className="px-sm py-2 font-label-mono text-[11px] uppercase tracking-wider text-[#8a8278]">
              Outputs
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>output</span>
                Deliverables
              </a>
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>fact_check</span>
                Approvals
              </a>
            </div>
          </div>

          <div className="mb-4">
            <div className="px-sm py-2 font-label-mono text-[11px] uppercase tracking-wider text-[#8a8278]">
              Governance
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>shield</span>
                Security Center
              </a>
            </div>
          </div>
        </nav>

        <div className="mt-auto mb-2">
          <a className="flex items-center gap-sm px-sm py-2 rounded-DEFAULT font-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>settings</span>
            Settings
          </a>
        </div>
        <div className="pt-md border-t border-outline-variant/30 mt-auto">
          <div className="flex items-center gap-2 px-xs font-label-mono text-label-mono text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              fiber_manual_record
            </span>
            Local Processing Active
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-[280px]">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-[280px] z-30 backdrop-blur-md bg-surface/40 border-b border-outline-variant/20 h-xl px-gutter flex items-center justify-between">
          <div className="flex items-center gap-md">
            <div className="flex flex-col">
              <div className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-1">
                <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
                <span className="text-on-surface">Documents</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-tight mt-1">Documents</h1>
            </div>
          </div>
          <div className="flex items-center gap-sm">
            <button className="text-on-primary font-button text-button h-10 px-4 rounded-full border border-outline hover:bg-surface-tint transition-colors flex items-center gap-2 mr-2 bg-primary">
              <span className="material-symbols-outlined text-[18px]">upload</span>
              Upload Documents
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[20px]">help</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[20px]">account_circle</span>
              </button>
            </div>
          </div>
        </header>

        {/* Workspace Canvas */}
        <main className="mt-xl h-[calc(100vh-64px)] flex overflow-hidden flex-1">
          {/* Document Management Left Pane */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-outline-variant/20">
            {/* Header Actions */}
            <div className="p-margin flex items-center justify-between border-b border-outline-variant/10">
              <div>
                <h1 className="text-[20px] text-on-surface mb-1 font-display-md">Document Registry</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Manage and index sovereign files for AI processing.</p>
              </div>
              <div className="flex items-center gap-sm">
                <button className="bg-surface-bright border border-outline text-on-surface font-button text-button h-10 px-4 rounded-sm hover:bg-surface-container-high transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  Filter
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="px-margin py-md border-b border-outline-variant/10">
              <div className="relative max-w-2xl">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                <input
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-full py-2.5 pl-10 pr-4 text-body-sm font-label-mono text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-0 transition-all"
                  placeholder="Search documents, metadata, or content hash..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Drag and Drop Area */}
            <div className="p-margin">
              <div className="border border-dashed border-outline-variant rounded-xl p-12 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[20px]">cloud_upload</span>
                </div>
                <h3 className="font-body-lg text-on-surface mb-1">Drag and drop files here</h3>
                <p className="font-body-sm text-on-surface-variant">or click to browse from your computer</p>
                <p className="font-label-mono text-[10px] text-on-surface-variant mt-4">Supported formats: PDF, DOCX, CSV, TXT (Max 500MB)</p>
              </div>
            </div>

            {/* Data Table */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 backdrop-blur z-10 border-b border-outline-variant/30 bg-surface-container-low">
                  <tr>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-4 py-3 w-8">
                      <input
                        className="rounded bg-surface-container border-outline-variant/50 text-primary focus:ring-0 focus:ring-offset-0"
                        type="checkbox"
                        checked={selectedRows.length === initialDocuments.length}
                        onChange={toggleSelectAll}
                      />
                    </th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Document</th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Type</th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Size</th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Processing</th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Knowledge Status</th>
                    <th className="font-label-mono text-label-mono text-on-surface-variant uppercase px-sm py-3">Owner</th>
                    <th className="px-sm py-3"></th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant">
                  {initialDocuments
                    .filter((doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((doc) => {
                      const isSelected = selectedDocId === doc.id;
                      return (
                        <tr
                          key={doc.id}
                          onClick={() => {
                            setSelectedDocId(doc.id);
                            setIsDetailOpen(true);
                          }}
                          className={`cursor-pointer transition-colors group border-b border-outline-variant/10 ${
                            isSelected ? 'bg-surface-container-high/50 hover:bg-surface-container-high' : 'hover:bg-surface-container-low'
                          }`}
                        >
                          <td className="py-5 px-4" onClick={(e) => e.stopPropagation()}>
                            <input
                              className="rounded bg-surface-container border-outline-variant/50 text-primary focus:ring-0 focus:ring-offset-0"
                              type="checkbox"
                              checked={selectedRows.includes(doc.id)}
                              onChange={() => toggleSelectRow(doc.id)}
                            />
                          </td>
                          <td className="px-sm py-5">
                            <div className="flex items-center gap-3">
                              <span className={`material-symbols-outlined text-[20px] ${doc.iconColor}`}>
                                {doc.icon}
                              </span>
                              <span className="font-medium text-on-surface">
                                {doc.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-sm text-on-surface-variant py-5 font-label-mono text-label-mono">{doc.type}</td>
                          <td className="px-sm font-label-mono text-label-mono text-on-surface-variant py-5">{doc.size}</td>
                          <td className="px-sm py-5">
                            <div className="flex items-center gap-2">
                              <span className={`material-symbols-outlined text-[20px] ${doc.processingColor}`}>
                                {doc.processingIcon}
                              </span>
                              <span className={doc.processingColor.includes('text-error') ? 'text-error' : 'text-on-surface'}>
                                {doc.processing}
                              </span>
                            </div>
                          </td>
                          <td className="px-sm py-5">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded font-label-mono text-[10px] ${doc.statusBg}`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="px-sm text-on-surface-variant py-5">{doc.owner}</td>
                          <td className="px-sm text-right py-5 pr-4">
                            <button
                              className="text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Document Detail Right Pane */}
          {isDetailOpen && (
            <div className="w-[420px] bg-surface-container-low border-l border-outline-variant/20 overflow-y-auto hidden lg:flex flex-col">
              {/* Detail Header */}
              <div className="p-md border-b border-outline-variant/10 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-surface-bright rounded flex items-center justify-center ghost-border shrink-0">
                    <span className={`material-symbols-outlined text-[20px] ${activeDoc.iconColor}`}>
                      {activeDoc.icon}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-body-lg text-body-lg font-medium text-on-surface break-words max-w-[280px]">
                      {activeDoc.name}
                    </h2>
                    <div className="font-label-mono text-label-mono text-on-surface-variant mt-1">Uploaded 2 hours ago</div>
                  </div>
                </div>
                <button
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                  onClick={() => setIsDetailOpen(false)}
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="p-md flex flex-col gap-md">
                {/* Preview Panel */}
                <div className="rounded-lg ghost-border overflow-hidden flex flex-col h-[240px] bg-surface-container-high ring-1 ring-white/5">
                  <div className="px-3 py-2 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/50">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">Preview</span>
                    <button className="text-on-surface-variant hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                    </button>
                  </div>
                  <div
                    className="flex-1 bg-surface flex items-center justify-center p-4 relative"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf4w3_k6VwwUIK9_DTNWpvWoz_YOn9oeudMF8COl9U_mzchU9h-ZMqLF3XpfRpUl-VHR-yCPoROptaBbKW5v0rSulR-6vMiorBw-smMKWPReWHpNMYOrVOI5PuYIzJs6uQtAQnXsG_7fhWnUAAbpUTXgESnlQtBZfs-bGD_KtFTfzM35ud8morVujbS3iFtnx0sIiZjlYi-MZ5CyATEGRl6KzZttOASMjBg-_CXAUt_fHs55f70PvtgA')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px]"></div>
                    <div className="relative z-10 w-full max-w-[200px] h-full bg-[#eae1db] rounded shadow-sm flex flex-col gap-2 p-3 opacity-80">
                      <div className="h-2 w-3/4 bg-[#33302a] rounded-sm"></div>
                      <div className="h-1 w-full bg-[#33302a]/40 rounded-sm mt-2"></div>
                      <div className="h-1 w-5/6 bg-[#33302a]/40 rounded-sm"></div>
                      <div className="h-1 w-full bg-[#33302a]/40 rounded-sm"></div>
                      <div className="h-1 w-4/6 bg-[#33302a]/40 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* OCR & Processing Status */}
                <div className="bg-surface-bright rounded-lg ghost-border p-6">
                  <h3 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-3">Processing Status</h3>
                  <div className="space-y-3 font-label-mono text-[11px]">
                    <div className="flex justify-between items-center border-b border-[#1c1815] pb-2">
                      <span className="text-on-surface-variant">OCR Engine</span>
                      <span className="text-on-surface">Sovara Vision v4.2</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1c1815] pb-2">
                      <span className="text-on-surface-variant">Tokens Extracted</span>
                      <span className="text-on-surface">42,108</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1c1815] pb-2">
                      <span className="text-on-surface-variant">Entities Found</span>
                      <span className="text-on-surface">156</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-on-surface-variant">Status</span>
                      <span className="text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span> SUCCESS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Knowledge Collections */}
                <div className="bg-surface-bright rounded-lg ghost-border p-4 ring-1 ring-white/5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">Knowledge Collections</h3>
                    <button className="text-on-surface-variant hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {collections.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-surface-container rounded border border-outline-variant/30 font-label-mono text-[11px] text-on-surface flex items-center gap-1 group cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <span className="material-symbols-outlined text-outline text-[20px]">folder</span>
                        {tag}
                        <button
                          onClick={() => removeCollection(tag)}
                          className="material-symbols-outlined text-[20px] opacity-0 group-hover:opacity-100 ml-1 text-on-surface-variant hover:text-on-surface"
                        >
                          close
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}