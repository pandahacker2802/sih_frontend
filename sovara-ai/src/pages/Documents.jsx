import { useMemo, useState } from "react";
import { CheckCircle2, ChevronRight, CloudUpload, FileText, Filter, MoreVertical, Play, Search, AlertTriangle, X } from "lucide-react";
import { registryDocuments as initialDocuments } from "../data/mockData";

function Documents() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(initialDocuments[0]);
  const [uploaded, setUploaded] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [documentAction, setDocumentAction] = useState("");
  const filteredDocuments = useMemo(() => initialDocuments.filter(([name, type, , , , owner, , state]) => (statusFilter === "all" || state === statusFilter) && `${name} ${type} ${owner}`.toLowerCase().includes(query.toLowerCase())), [query, statusFilter]);

  return (
    <main className="documents-page">
      <section className="document-registry">
        <header className="registry-header"><div><p className="workspace-label">Knowledge / Registry</p><h1>Document Registry</h1><p>Manage and index sovereign files for AI processing.</p></div><label className="select-control"><Filter size={16} /><span className="sr-only">Filter documents by status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option value="all">All statuses</option><option value="complete">Complete</option><option value="processing">Processing</option><option value="error">Failed</option></select></label></header>
        <div className="document-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search documents, metadata, or content hash..." /></div>
        {/* Backend connection point: POST /api/documents with the selected multipart file. */}
        <label className={`upload-zone${uploaded ? " uploaded" : ""}`}><input type="file" hidden onChange={(event) => setUploaded(Boolean(event.target.files?.[0]))} /><span><CloudUpload size={25} /></span><strong>{uploaded ? "Document queued for indexing" : "Drag and drop files here"}</strong><em>{uploaded ? "Local processing has started" : "or click to browse from your computer"}</em><small>Supported formats: PDF, DOCX, CSV, TXT (Max 500MB)</small></label>
        {documentAction && <div className="export-feedback" role="status">{documentAction}</div>}
        <div className="document-table-wrap"><table className="document-table"><thead><tr><th><input type="checkbox" aria-label="Select all documents" /></th><th>Document</th><th>Type</th><th>Size</th><th>Processing</th><th>Knowledge Status</th><th>Owner</th><th /></tr></thead><tbody>{filteredDocuments.map((document) => <DocumentRow document={document} selected={selected[0] === document[0]} onSelect={(documentItem) => { setSelected(documentItem); setDetailsOpen(true); }} onAction={setDocumentAction} key={document[0]} />)}</tbody></table>{filteredDocuments.length === 0 && <p className="empty-documents">No documents match your search.</p>}</div>
      </section>
      {detailsOpen && <aside className="document-detail"><div className="detail-header"><div className="detail-title"><span><FileText size={20} /></span><div><h2>{selected[0]}</h2><p>Uploaded 2 hours ago</p></div></div><button aria-label="Close details" type="button" onClick={() => setDetailsOpen(false)}><X size={18} /></button></div><div className="detail-body"><div className="preview-card"><div><span>Preview</span><button aria-label="Open preview" type="button"><ChevronRight size={16} /></button></div><div className="paper-preview"><b /><i /><i /><i /><i /></div></div><DetailStatus /><div className="detail-card"><div className="detail-card-heading"><span>Knowledge collections</span><button aria-label="Add collection" type="button"><span>+</span></button></div><div className="collection-list"><span>Q4 Strategy</span><span>Board Materials</span></div></div><AuditLog /></div></aside>}
    </main>
  );
}

function DocumentRow({ document, selected, onSelect, onAction }) {
  const [name, type, size, processing, knowledge, owner, icon, state] = document;
  const [menuOpen, setMenuOpen] = useState(false);
  function runAction(action) {
    setMenuOpen(false);
    onAction(`${action} queued for ${name}.`);
  }

  return <tr className={selected ? "selected-row" : ""} onClick={() => onSelect(document)}><td><input type="checkbox" checked={selected} onChange={() => onSelect(document)} onClick={(event) => event.stopPropagation()} aria-label={`Select ${name}`} /></td><td><div className={`file-icon ${icon}`}><FileText size={18} /></div><strong>{name}</strong></td><td>{type}</td><td>{size}</td><td><span className={`processing-state ${state}`}>{state === "complete" ? <CheckCircle2 size={16} /> : state === "error" ? <AlertTriangle size={16} /> : <Play size={15} />}{processing}</span></td><td><b className={`knowledge-state ${state}`}>{knowledge}</b></td><td>{owner}</td><td className="document-actions-cell"><button className="row-menu" type="button" aria-label={`Actions for ${name}`} aria-expanded={menuOpen} onClick={(event) => { event.stopPropagation(); setMenuOpen(!menuOpen); }}><MoreVertical size={17} /></button>{menuOpen && <div className="document-action-menu" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => { onSelect(document); setMenuOpen(false); }}>View details</button><button type="button" onClick={() => runAction("Reindex")}>Reindex</button><button type="button" className="danger-action" onClick={() => runAction("Archive")}>Archive</button></div>}</td></tr>;
}

function DetailStatus() {
  return <div className="detail-card"><h3>Processing status</h3><div className="detail-status-list"><div><span>OCR Engine</span><b>Sovara Vision v4.2</b></div><div><span>Tokens Extracted</span><b>42,108</b></div><div><span>Entities Found</span><b>156</b></div><div><span>Status</span><b className="success-text"><CheckCircle2 size={13} /> SUCCESS</b></div></div></div>;
}

function AuditLog() {
  return <div className="detail-card audit-log"><h3>Audit log</h3><div><span>Vector embeddings generated<small>Today, 10:45 AM</small></span><span>OCR Processing complete<small>Today, 10:42 AM</small></span><span>Document uploaded<small>Today, 10:40 AM by J. Vance</small></span></div></div>;
}

export default Documents;
