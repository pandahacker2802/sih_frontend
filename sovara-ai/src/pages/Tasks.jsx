import { useMemo, useState } from "react";
import {
	AlertTriangle,
	ArrowUpDown,
	Bot,
	Boxes,
	CalendarRange,
	Check,
	CheckCircle2,
	ChevronRight,
	Cpu,
	Database,
	Download,
	ExternalLink,
	FileText,
	Filter,
	LineChart,
	Loader2,
	MoreVertical,
	Plus,
	Radar,
	Search,
	ShieldCheck,
	Wrench,
} from "lucide-react";
import "./Task.css";

const TAB_DEFS = [
	{ key: "active", label: "Active" },
	{ key: "completed", label: "Completed" },
	{ key: "awaiting", label: "Awaiting Approval" },
	{ key: "failed", label: "Failed" },
];

const TOOL_ICONS = {
	search: Search,
	database: Database,
	radar: Radar,
	chart: LineChart,
	boxes: Boxes,
	shield: ShieldCheck,
};

const tasks = [
	{
		id: "TSK-8924-X",
		tab: "active",
		name: "Quarterly Competitor Analysis Draft",
		description: "Cross-referencing market intelligence feeds to surface competitor positioning shifts for the Q3 board briefing.",
		status: "in-progress",
		statusLabel: "In Progress",
		created: "2023-10-24",
		duration: "2h 15m",
		owner: "Agent-Sigma",
		ownerKind: "agent",
		tools: ["search", "database"],
		progress: 65,
		timeline: [
			{ time: "10:00 AM", text: "Data ingestion from secure endpoints initiated.", state: "done" },
			{ time: "11:15 AM", text: "Synthesizing entity relationships and anomalous market signals.", state: "current", sources: ["Q3_Financial_Review.pdf", "Competitor_Metrics_Raw.csv"] },
			{ time: "Pending", text: "Generate final executive summary document.", state: "pending" },
		],
		sources: [
			{ label: "High Relevance", name: "Q3_Financial_Review.pdf", detail: "Section 2: Segment revenue breakdown", tone: "primary" },
			{ label: "Context", name: "Competitor_Metrics_Raw.csv", detail: "1,204 rows · pricing & headcount signals", tone: "neutral" },
		],
		actions: [
			{ time: "11:15 AM", text: 'Called tool web_search("competitor Q3 pricing changes")' },
			{ time: "10:42 AM", text: "Retrieved 14 documents from Knowledge Hub collection Facility Q3" },
			{ time: "10:00 AM", text: "Task claimed by Agent-Sigma" },
		],
		output: { name: "Competitor_Analysis_Draft_v1.docx", type: "DOCX", note: "Draft in progress · 65% complete" },
		audit: [
			{ text: "Progress checkpoint saved", time: "Today, 11:15 AM" },
			{ text: "Task escalated to priority queue", time: "Today, 10:05 AM" },
			{ text: "Task created by J. Vance", time: "Today, 10:00 AM" },
		],
	},
	{
		id: "TSK-8925-B", tab: "active", name: "Redact Personnel Files (Batch B)",
		description: "Automated PII redaction sweep across the personnel archive ahead of the external audit handoff.", status: "queued", statusLabel: "Queued",
		created: "2023-10-25", duration: "--", owner: "System", ownerKind: "system", tools: ["shield"], waiting: true, progress: 0,
		timeline: [{ time: "Queued", text: "Task is queued and waiting for a compute slot to free up.", state: "pending" }],
		sources: [{ label: "Context", name: "Personnel_Archive_2023.zip", detail: "3,402 files pending scan", tone: "neutral" }],
		actions: [{ time: "2023-10-25", text: "Task queued by System scheduler" }], output: { name: "—", type: "—", note: "No output generated yet" },
		audit: [{ text: "Task queued, waiting for resources", time: "2023-10-25" }],
	},
	{
		id: "TSK-8790-C", tab: "completed", name: "Vendor Contract Compliance Review",
		description: "Reviewed active vendor contracts against the updated sovereignty and data-residency clauses.", status: "completed", statusLabel: "Completed",
		created: "2023-10-20", duration: "3h 10m", owner: "Agent-Sigma", ownerKind: "agent", tools: ["database", "search"], progress: 100,
		timeline: [{ time: "09:00 AM", text: "Contract batch pulled from Legal knowledge collection.", state: "done" }, { time: "12:10 PM", text: "Compliance summary generated and routed for approval.", state: "done" }],
		sources: [{ label: "Context", name: "Vendor_Contracts_2023.pdf", detail: "48 contracts reviewed", tone: "neutral" }], actions: [{ time: "12:10 PM", text: "Generated compliance summary document" }],
		output: { name: "Vendor_Compliance_Summary.pdf", type: "PDF", note: "Approved and archived" }, audit: [{ text: "Task completed and archived", time: "2023-10-20, 12:10 PM" }],
	},
	{
		id: "TSK-8910-F", tab: "awaiting", name: "Site Inspection Note: Sector 4 Alpha",
		description: "Drafted structural inspection note pending human authorization before release.", status: "awaiting-approval", statusLabel: "Awaiting Approval",
		created: "2023-10-24", duration: "1h 55m", owner: "Agent-Sigma", ownerKind: "agent", tools: ["radar"], progress: 100,
		timeline: [{ time: "09:15 AM", text: "Draft note generated and submitted for human review.", state: "done" }],
		sources: [{ label: "High Relevance", name: "Drone_Scan_Log_7.json", detail: "Micro-fractures, Quadrant B", tone: "primary" }], actions: [{ time: "09:15 AM", text: "Submitted draft note for human-in-the-loop review" }],
		output: { name: "Sector4_Alpha_Inspection_Note.pdf", type: "PDF", note: "Pending approval" }, audit: [{ text: "Routed to Approvals queue", time: "2023-10-24, 9:15 AM" }],
	},
	{
		id: "TSK-8802-Z", tab: "failed", name: "Legacy Archive De-duplication",
		description: "Attempted to de-duplicate the legacy document archive prior to cold storage migration.", status: "failed", statusLabel: "Failed",
		created: "2023-10-19", duration: "22m", owner: "System", ownerKind: "system", tools: ["database"], progress: 0,
		error: "Connection to secure endpoint timed out after 3 retries.", timeline: [{ time: "03:10 PM", text: "Legacy archive sync started against cold storage endpoint.", state: "done" }, { time: "03:32 PM", text: "Connection to secure endpoint timed out after 3 retries.", state: "failed" }],
		sources: [{ label: "Context", name: "Legacy_Archive_Index.csv", detail: "1.2M records indexed", tone: "neutral" }], actions: [{ time: "03:32 PM", text: "Retry limit reached, task marked failed" }], output: { name: "—", type: "—", note: "No output generated" },
		audit: [{ text: "Task failed, flagged for manual retry", time: "2023-10-19, 3:32 PM" }],
	},
];

function Tasks() {
	const [activeTab, setActiveTab] = useState("active");
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(tasks[0].id);
	const [taskAction, setTaskAction] = useState("");
	const filteredTasks = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return tasks.filter((task) => task.tab === activeTab && `${task.name} ${task.id} ${task.owner}`.toLowerCase().includes(normalizedQuery));
	}, [activeTab, query]);
	const tabs = useMemo(() => TAB_DEFS.map((tab) => ({ ...tab, count: tasks.filter((task) => task.tab === tab.key).length })), []);
	const selectedTask = filteredTasks.find((task) => task.id === selectedId) || filteredTasks[0];

	function selectTab(key) {
		setActiveTab(key);
		setTaskAction("");
		const firstTask = tasks.find((task) => task.tab === key);
		if (firstTask) setSelectedId(firstTask.id);
	}

	return (
		<main className="tasks-page">
			<header className="task-header">
				<div><p className="eyebrow">Operations / Workflows</p><h1>Task Operations</h1><p className="subtitle">Monitor and manage autonomous intelligence gathering and analytical workflows across sovereign data zones.</p></div>
				<div className="header-actions"><button className="button button-primary" type="button"><Plus size={16} /> New Task</button><button className="button button-secondary" type="button"><Filter size={15} /> Filter</button><button className="button button-secondary" type="button"><ArrowUpDown size={15} /> Sort</button></div>
			</header>
			<nav className="task-tabbar" aria-label="Task status">{tabs.map((tab) => <button key={tab.key} type="button" className={`task-tab${activeTab === tab.key ? " active" : ""}`} onClick={() => selectTab(tab.key)}>{tab.label}<span>({tab.count})</span></button>)}</nav>
			<div className="tasks-layout">
				<section className="task-list-panel"><div className="tasks-toolbar"><label className="document-search task-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search task by name, ID, or Owner..." aria-label="Search tasks" /></label><button className="button button-secondary" type="button"><CalendarRange size={15} /> Date Range</button></div><div className="task-list">{filteredTasks.length === 0 ? <p className="empty-documents">No tasks match this view.</p> : filteredTasks.map((task) => <TaskRow task={task} selected={selectedTask?.id === task.id} onSelect={(selectedTaskItem) => { setSelectedId(selectedTaskItem.id); setTaskAction(""); }} key={task.id} />)}</div></section>
				{selectedTask && <TaskDetail task={selectedTask} action={taskAction} onAction={setTaskAction} />}
			</div>
		</main>
	);
}

function TaskRow({ task, selected, onSelect }) {
	return <article className={`task-row${selected ? " selected" : ""}`} onClick={() => onSelect(task)}><div className="task-row-top"><h3>{task.name}</h3><span className={`task-pill ${task.status}`}>{task.statusLabel}</span></div><p className="task-row-desc">{task.description}</p><div className="task-row-meta"><span>Created: {task.created}</span><span>Duration: {task.duration}</span><span>Owner: {task.owner}</span></div><div className="task-row-footer"><div className="task-tools"><OwnerBadge kind={task.ownerKind} />{task.tools.map((tool) => { const Icon = TOOL_ICONS[tool]; return <span className="tool-chip" key={tool}><Icon size={12} /></span>; })}</div><button className="row-menu" aria-label={`Actions for ${task.name}`} onClick={(event) => event.stopPropagation()}><MoreVertical size={16} /></button></div>{task.waiting && <p className="task-waiting">Waiting for resources</p>}</article>;
}

function OwnerBadge({ kind }) { return <span className={`owner-badge ${kind}`}>{kind === "system" ? <Cpu size={12} /> : <Bot size={12} />}</span>; }

function TaskDetail({ task, action, onAction }) {
	return <aside className="task-detail"><div className="detail-header"><div className="detail-title"><h2>{task.name}</h2><p>ID: {task.id}</p></div><button aria-label="Open full task" type="button"><ExternalLink size={17} /></button></div><div className="detail-body"><div className="detail-card task-overview"><h3>Task Overview</h3><div className="progress-heading"><span>Overall Progress</span><b>{task.progress}%</b></div><div className="confidence-track"><i style={{ width: `${task.progress}%` }} className={task.status === "failed" ? "muted" : ""} /></div><div className="detail-status-list"><div><span>Status</span><b>{task.statusLabel}</b></div><div><span>Owner</span><b>{task.owner}</b></div><div><span>Created</span><b>{task.created}</b></div><div><span>Duration</span><b>{task.duration}</b></div></div>{task.error && <p className="task-error"><AlertTriangle size={13} /> {task.error}</p>}</div><div className="detail-card"><h3>Execution Timeline</h3><div className="exec-timeline">{task.timeline.map((step, index) => <TimelineStep step={step} key={index} />)}</div></div><div className="detail-card"><h3>Sources</h3><div className="source-list">{task.sources.map((source) => <article className="source-card" key={source.name}><div className={`source-label ${source.tone}`}>{source.label} <ExternalLink size={12} /></div><strong>{source.name}</strong><span>{source.detail}</span></article>)}</div></div><div className="detail-card"><h3>Agent Actions &amp; Tool Calls</h3><ul className="tool-call-list">{task.actions.map((entry, index) => <li key={index}><Wrench size={13} /><div><p>{entry.text}</p><time>{entry.time}</time></div></li>)}</ul></div><div className="detail-card output-card"><h3>Generated Output</h3><div className="output-row"><span className="output-icon"><FileText size={18} /></span><div><strong>{task.output.name}</strong><span>{task.output.note}</span></div>{task.output.type !== "—" && <button className="output-download" type="button" aria-label="Download output"><Download size={16} /></button>}</div></div><div className="detail-card audit-log"><h3>Audit Information</h3><div>{task.audit.map((entry, index) => <span key={index}>{entry.text}<small>{entry.time}</small></span>)}</div></div></div>{action && <p className="task-action-feedback" role="status">{action}</p>}<div className="detail-footer-actions"><button className="button button-secondary" type="button" onClick={() => onAction("Task abort requested.")}>Abort Task</button><button className="button button-primary" type="button" onClick={() => onAction("Loading agent logs...")}><ChevronRight size={15} /> View Agent Logs</button></div></aside>;
}

function TimelineStep({ step }) {
	return <div className={`exec-step ${step.state}`}><span className="exec-step-dot">{step.state === "done" && <Check size={10} />}{step.state === "current" && <Loader2 size={10} />}{step.state === "failed" && <AlertTriangle size={9} />}</span><div className="exec-step-body"><div className="exec-step-head"><span className="exec-step-time">{step.time}</span>{step.state === "current" && <span className="exec-step-tag">Current Phase</span>}{step.state === "done" && <CheckCircle2 size={13} className="exec-step-check" />}</div><p>{step.text}</p>{step.sources && <div className="exec-refs"><span className="exec-refs-label">Referencing sources:</span><div className="exec-refs-list">{step.sources.map((source) => <span className="exec-ref-chip" key={source}><FileText size={12} /> {source}</span>)}</div></div>}</div></div>;
}

export default Tasks;
