import { useMemo, useState } from "react";
import { CheckCircle2, ChevronRight, CloudUpload, FileText, Filter, MoreVertical, Play, Search, AlertTriangle, X } from "lucide-react";

const initialDocuments = [
  ["Q4_Strategic_Briefing_v2.pdf", "PDF", "4.2 MB", "Complete", "COMPLETED", "J. Vance", "pdf", "complete"],
  ["Project_Titan_Requirements.docx", "DOCX", "1.1 MB", "OCR Extracting", "PENDING", "System", "docx", "processing"],
  ["Financial_Audit_2023_Final.csv", "CSV", "12.8 MB", "Complete", "INDEXED", "E. Stone", "csv", "complete"],
  ["Corrupted_Archive_Backup.zip", "ZIP", "450 MB", "Failed", "ERROR", "System", "zip", "error"],
];

function Documents() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(initialDocuments[0]);
  const [uploaded, setUploaded] = useState(false);
  const filteredDocuments = useMemo(() => initialDocuments.filter(([name, type, , , , owner]) => `${name} ${type} ${owner}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <main className="documents-page">
      <section className="document-registry">
        <header className="registry-header"><div><p className="workspace-label">Knowledge / Registry</p><h1>Document Registry</h1><p>Manage and index sovereign files for AI processing.</p></div><button className="manage-button"><Filter size={16} /> Filter</button></header>
        <div className="document-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search documents, metadata, or content hash..." /></div>
        <button className={`upload-zone${uploaded ? " uploaded" : ""}`} onClick={() => setUploaded(true)}><span><CloudUpload size={25} /></span><strong>{uploaded ? "Document queued for indexing" : "Drag and drop files here"}</strong><em>{uploaded ? "Local processing has started" : "or click to browse from your computer"}</em><small>Supported formats: PDF, DOCX, CSV, TXT (Max 500MB)</small></button>
        <div className="document-table-wrap"><table className="document-table"><thead><tr><th><input type="checkbox" aria-label="Select all documents" /></th><th>Document</th><th>Type</th><th>Size</th><th>Processing</th><th>Knowledge Status</th><th>Owner</th><th /></tr></thead><tbody>{filteredDocuments.map((document) => <DocumentRow document={document} selected={selected[0] === document[0]} onSelect={setSelected} key={document[0]} />)}</tbody></table>{filteredDocuments.length === 0 && <p className="empty-documents">No documents match your search.</p>}</div>
      </section>
      <aside className="document-detail"><div className="detail-header"><div className="detail-title"><span><FileText size={20} /></span><div><h2>{selected[0]}</h2><p>Uploaded 2 hours ago</p></div></div><button aria-label="Close details"><X size={18} /></button></div><div className="detail-body"><div className="preview-card"><div><span>Preview</span><button aria-label="Open preview"><ChevronRight size={16} /></button></div><div className="paper-preview"><b /><i /><i /><i /><i /></div></div><DetailStatus /><div className="detail-card"><div className="detail-card-heading"><span>Knowledge collections</span><button aria-label="Add collection"><span>+</span></button></div><div className="collection-list"><span>Q4 Strategy</span><span>Board Materials</span></div></div><AuditLog /></div></aside>
    </main>
  );
}

function DocumentRow({ document, selected, onSelect }) {
  const [name, type, size, processing, knowledge, owner, icon, state] = document;
  return <tr className={selected ? "selected-row" : ""} onClick={() => onSelect(document)}><td><input type="checkbox" checked={selected} onChange={() => onSelect(document)} onClick={(event) => event.stopPropagation()} aria-label={`Select ${name}`} /></td><td><div className={`file-icon ${icon}`}><FileText size={18} /></div><strong>{name}</strong></td><td>{type}</td><td>{size}</td><td><span className={`processing-state ${state}`}>{state === "complete" ? <CheckCircle2 size={16} /> : state === "error" ? <AlertTriangle size={16} /> : <Play size={15} />}{processing}</span></td><td><b className={`knowledge-state ${state}`}>{knowledge}</b></td><td>{owner}</td><td><button className="row-menu" aria-label={`Actions for ${name}`}><MoreVertical size={17} /></button></td></tr>;
}

function DetailStatus() {
  return <div className="detail-card"><h3>Processing status</h3><div className="detail-status-list"><div><span>OCR Engine</span><b>Sovara Vision v4.2</b></div><div><span>Tokens Extracted</span><b>42,108</b></div><div><span>Entities Found</span><b>156</b></div><div><span>Status</span><b className="success-text"><CheckCircle2 size={13} /> SUCCESS</b></div></div></div>;
}

function AuditLog() {
  return <div className="detail-card audit-log"><h3>Audit log</h3><div><span>Vector embeddings generated<small>Today, 10:45 AM</small></span><span>OCR Processing complete<small>Today, 10:42 AM</small></span><span>Document uploaded<small>Today, 10:40 AM by J. Vance</small></span></div></div>;
}

export default Documents;
