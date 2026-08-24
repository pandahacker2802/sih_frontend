import { useState } from "react";
import { BookOpen, Check, FileText, Folder, Paperclip, Send, Wrench, ExternalLink, Database } from "lucide-react";

const documents = ["SOP-17_Safety_Guidelines.pdf", "Inspection_Report_042.pdf"];
const sources = [
	["High Relevance", "SOP-17_Safety_Guidelines.pdf", "Section 4.2: Reactive Materials", "primary"],
	["Context", "Inspection_Report_042.pdf", "Page 3: Sector G Observations", "neutral"],
];

function AIWorkspace() {
	const [prompt, setPrompt] = useState("");
	const [sentPrompt, setSentPrompt] = useState("");

	function submitPrompt(event) {
		event.preventDefault();
		if (!prompt.trim()) return;
		setSentPrompt(prompt.trim());
		setPrompt("");
	}

	return (
		<main className="workspace-page">
			<aside className="workspace-context">
				<div className="workspace-context-heading"><p className="workspace-label">Current context</p><strong>Analyze Inspection Report #042</strong></div>
				<div className="workspace-context-body">
					<section className="workspace-side-section"><h2><Folder size={16} /> Attached documents</h2><div className="document-list">{documents.map((document) => <button className="document-item" key={document}><FileText size={18} /><span>{document}</span></button>)}</div></section>
					<section className="workspace-side-section"><h2><Database size={16} /> Knowledge collections</h2><div className="collection-list"><span>Safety Protocols 2024</span><span>Facility Q3</span></div></section>
				</div>
			</aside>

			<section className="workspace-conversation">
				<div className="chat-area">
					<p className="workspace-label">Analysis session</p>
					<h1>Analysis Session</h1>
					<div className="user-message">Summarize the safety issues identified in the recent inspection and map them to our current protocols.</div>
					{sentPrompt && <div className="user-message follow-up">{sentPrompt}</div>}
					<div className="assistant-message">
						<p>Based on a review of <button className="inline-reference">Inspection_Report_042.pdf</button>, several key safety deviations were noted, primarily concerning equipment storage and ventilation in Sector G.</p>
						<p>According to <button className="inline-reference">[SOP-17.pdf §4.2]</button>, “All highly reactive materials must be stored in specialized containment units with active ventilation.” The report indicates that temporary storage units were utilized for a duration exceeding the 48-hour limit.</p>
						<ul><li><strong>Ventilation Failure:</strong> The secondary extraction fan in Sector G was operating at 40% capacity.</li><li><strong>Storage Protocol Breach:</strong> Reactive compounds remained in transit staging for 72 hours.</li></ul>
						<p>I can draft an incident response memo outlining immediate corrective actions if needed.</p>
					</div>
				</div>
				<form className="workspace-composer" onSubmit={submitPrompt}>
					<textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Direct the analysis..." rows="3" />
					<div className="composer-toolbar"><div><button type="button"><Paperclip size={15} /> Attach</button><button type="button"><BookOpen size={15} /> Knowledge</button><button type="button"><Wrench size={15} /> Tools</button></div><button className="send-button" type="submit" aria-label="Send prompt"><Send size={17} /></button></div>
				</form>
			</section>

			<aside className="workspace-trace">
				<p className="workspace-label">Trace &amp; sources</p>
				<div className="trace-list"><TraceItem text="Understanding request parameters" done /><TraceItem text="Searching knowledge base for 'Sector G'" done /><TraceItem text="Reviewing evidence" active /></div>
				<div className="source-list">{sources.map(([label, name, detail, tone]) => <article className="source-card" key={name}><div className={`source-label ${tone}`}>{label}<ExternalLink size={13} /></div><strong>{name}</strong><span>{detail}</span></article>)}</div>
			</aside>
		</main>
	);
}

function TraceItem({ text, done, active }) {
	return <div className={`trace-item${active ? " active" : ""}`}><span>{done ? <Check size={10} /> : <i />}</span><div>{text}</div></div>;
}

export default AIWorkspace;
