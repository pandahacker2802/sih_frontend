import { useState } from "react";
import { CheckCircle2, Download, FileText, Plus, Clock3 } from "lucide-react";

// Mock data: replace with GET /api/deliverables.
const deliverables = [
  [".docx", "Q3 Security Audit Report", "TSK-8921", "Oct 12, 2023", "approved", "blue"],
  [".xlsx", "Vendor Risk Assessment Matrix", "TSK-9044", "Oct 14, 2023", "pending", "green"],
  [".pdf", "Executive Briefing: Incident Alpha", "TSK-8810", "Oct 10, 2023", "approved", "red"],
];

// Mock data: replace with GET /api/documents?status=processed.
const documents = [
  ["Data Privacy Addendum v2", "Oct 08, 2023", "Sarah Jenkins", "approved"],
  ["Q4 OKR Planning Doc", "Oct 05, 2023", "Mike Chen", "draft"],
];

function Deliverables() {
  const [exported, setExported] = useState("");

  function exportFile(name) {
    setExported(`${name} queued for export`);
  }

  return (
    <main className="deliverables-page">
      <header className="deliverables-header">
        <div><p className="workspace-label">Outputs / Archive</p><h1>Deliverables</h1><p>Generated artifacts and final outputs ready for external distribution or archival.</p></div>
        <button className="button button-primary"><Plus size={17} /> Generate Deliverable</button>
      </header>
      {exported && <div className="export-feedback" role="status">{exported}</div>}
      <section>
        <div className="section-heading"><h2>Recent Deliverables</h2><span>3 artifacts</span></div>
        <div className="deliverable-grid">{deliverables.map(([type, name, reference, date, status, tone]) => <article className="deliverable-card" key={reference}><div className="deliverable-card-top"><span className={`file-type ${tone}`}>{type}</span><span className={`deliverable-status ${status}`}>{status === "approved" ? <CheckCircle2 size={13} /> : <Clock3 size={13} />}{status}</span></div><h3>{name}</h3><p className="reference">Ref: {reference}</p><div className="deliverable-card-footer"><time>{date}</time><button onClick={() => exportFile(name)}><Download size={15} /> Export</button></div></article>)}</div>
      </section>
      <section className="documents-section">
        <div className="section-heading"><h2>All Documents</h2><span>2 records</span></div>
        <div className="documents-table-wrap"><table className="documents-table"><thead><tr><th>Name</th><th>Created</th><th>Author</th><th>Status</th></tr></thead><tbody>{documents.map(([name, date, author, status]) => <tr key={name}><td><FileText size={19} />{name}</td><td>{date}</td><td>{author}</td><td><span className={`document-status ${status}`}><i />{status}</span></td></tr>)}</tbody></table></div>
      </section>
    </main>
  );
}

export default Deliverables;
