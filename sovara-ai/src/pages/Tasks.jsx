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
import { taskTabDefinitions as TAB_DEFS, tasks } from "../data/mockData";

const TOOL_ICONS = {
	search: Search,
	database: Database,
	radar: Radar,
	chart: LineChart,
	boxes: Boxes,
	shield: ShieldCheck,
};

function Tasks() {
	const [activeTab, setActiveTab] = useState("active");
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(tasks[0].id);
	const [taskAction, setTaskAction] = useState("");
	const [ownerFilter, setOwnerFilter] = useState("all");
	const [sortOrder, setSortOrder] = useState("created");
	const [dateFilter, setDateFilter] = useState("all");
	const filteredTasks = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return tasks.filter((task) => task.tab === activeTab && (ownerFilter === "all" || task.ownerKind === ownerFilter) && (dateFilter === "all" || task.created === dateFilter) && `${task.name} ${task.id} ${task.owner}`.toLowerCase().includes(normalizedQuery)).sort((first, second) => sortOrder === "name" ? first.name.localeCompare(second.name) : second.created.localeCompare(first.created));
	}, [activeTab, dateFilter, ownerFilter, query, sortOrder]);
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
				<div className="header-actions"><button className="button button-primary" type="button" onClick={() => setTaskAction("New task creation is ready in this mock workspace.")}><Plus size={16} /> New Task</button><label className="select-control"><Filter size={15} /><span className="sr-only">Filter tasks by owner</span><select value={ownerFilter} onChange={(event) => setOwnerFilter(event.target.value)}><option value="all">All owners</option><option value="agent">Agents</option><option value="system">System</option></select></label><label className="select-control"><ArrowUpDown size={15} /><span className="sr-only">Sort tasks</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}><option value="created">Newest first</option><option value="name">Name A-Z</option></select></label></div>
			</header>
			<nav className="task-tabbar" aria-label="Task status">{tabs.map((tab) => <button key={tab.key} type="button" className={`task-tab${activeTab === tab.key ? " active" : ""}`} onClick={() => selectTab(tab.key)}>{tab.label}<span>({tab.count})</span></button>)}</nav>
			<div className="tasks-layout">
				<section className="task-list-panel"><div className="tasks-toolbar"><label className="document-search task-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search task by name, ID, or Owner..." aria-label="Search tasks" /></label><label className="select-control date-control"><CalendarRange size={15} /><span className="sr-only">Filter tasks by date</span><select value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}><option value="all">All dates</option><option value="2023-10-25">October 25, 2023</option><option value="2023-10-24">October 24, 2023</option><option value="2023-10-20">October 20, 2023</option><option value="2023-10-19">October 19, 2023</option></select></label></div><div className="task-list">{filteredTasks.length === 0 ? <p className="empty-documents">No tasks match this view.</p> : filteredTasks.map((task) => <TaskRow task={task} selected={selectedTask?.id === task.id} onSelect={(selectedTaskItem) => { setSelectedId(selectedTaskItem.id); setTaskAction(""); }} onAction={setTaskAction} key={task.id} />)}</div></section>
				{selectedTask && <TaskDetail task={selectedTask} action={taskAction} onAction={setTaskAction} />}
			</div>
		</main>
	);
}

function TaskRow({ task, selected, onSelect, onAction }) {
	return <article className={`task-row${selected ? " selected" : ""}`} onClick={() => onSelect(task)}><div className="task-row-top"><h3>{task.name}</h3><span className={`task-pill ${task.status}`}>{task.statusLabel}</span></div><p className="task-row-desc">{task.description}</p><div className="task-row-meta"><span>Created: {task.created}</span><span>Duration: {task.duration}</span><span>Owner: {task.owner}</span></div><div className="task-row-footer"><div className="task-tools"><OwnerBadge kind={task.ownerKind} />{task.tools.map((tool) => { const Icon = TOOL_ICONS[tool]; return <span className="tool-chip" key={tool}><Icon size={12} /></span>; })}</div><button className="row-menu" type="button" aria-label={`Actions for ${task.name}`} onClick={(event) => { event.stopPropagation(); onAction(`Actions opened for ${task.name}.`); }}><MoreVertical size={16} /></button></div>{task.waiting && <p className="task-waiting">Waiting for resources</p>}</article>;
}

function OwnerBadge({ kind }) { return <span className={`owner-badge ${kind}`}>{kind === "system" ? <Cpu size={12} /> : <Bot size={12} />}</span>; }

function TaskDetail({ task, action, onAction }) {
	return <aside className="task-detail"><div className="detail-header"><div className="detail-title"><h2>{task.name}</h2><p>ID: {task.id}</p></div><button aria-label="Open full task" type="button"><ExternalLink size={17} /></button></div><div className="detail-body"><div className="detail-card task-overview"><h3>Task Overview</h3><div className="progress-heading"><span>Overall Progress</span><b>{task.progress}%</b></div><div className="confidence-track"><i style={{ width: `${task.progress}%` }} className={task.status === "failed" ? "muted" : ""} /></div><div className="detail-status-list"><div><span>Status</span><b>{task.statusLabel}</b></div><div><span>Owner</span><b>{task.owner}</b></div><div><span>Created</span><b>{task.created}</b></div><div><span>Duration</span><b>{task.duration}</b></div></div>{task.error && <p className="task-error"><AlertTriangle size={13} /> {task.error}</p>}</div><div className="detail-card"><h3>Execution Timeline</h3><div className="exec-timeline">{task.timeline.map((step, index) => <TimelineStep step={step} key={index} />)}</div></div><div className="detail-card"><h3>Sources</h3><div className="source-list">{task.sources.map((source) => <article className="source-card" key={source.name}><div className={`source-label ${source.tone}`}>{source.label} <ExternalLink size={12} /></div><strong>{source.name}</strong><span>{source.detail}</span></article>)}</div></div><div className="detail-card"><h3>Agent Actions &amp; Tool Calls</h3><ul className="tool-call-list">{task.actions.map((entry, index) => <li key={index}><Wrench size={13} /><div><p>{entry.text}</p><time>{entry.time}</time></div></li>)}</ul></div><div className="detail-card output-card"><h3>Generated Output</h3><div className="output-row"><span className="output-icon"><FileText size={18} /></span><div><strong>{task.output.name}</strong><span>{task.output.note}</span></div>{task.output.type !== "—" && <button className="output-download" type="button" aria-label="Download output"><Download size={16} /></button>}</div></div><div className="detail-card audit-log"><h3>Audit Information</h3><div>{task.audit.map((entry, index) => <span key={index}>{entry.text}<small>{entry.time}</small></span>)}</div></div></div>{action && <p className="task-action-feedback" role="status">{action}</p>}<div className="detail-footer-actions"><button className="button button-secondary" type="button" onClick={() => onAction("Task abort requested.")}>Abort Task</button><button className="button button-primary" type="button" onClick={() => onAction("Loading agent logs...")}><ChevronRight size={15} /> View Agent Logs</button></div></aside>;
}

function TimelineStep({ step }) {
	return <div className={`exec-step ${step.state}`}><span className="exec-step-dot">{step.state === "done" && <Check size={10} />}{step.state === "current" && <Loader2 size={10} />}{step.state === "failed" && <AlertTriangle size={9} />}</span><div className="exec-step-body"><div className="exec-step-head"><span className="exec-step-time">{step.time}</span>{step.state === "current" && <span className="exec-step-tag">Current Phase</span>}{step.state === "done" && <CheckCircle2 size={13} className="exec-step-check" />}</div><p>{step.text}</p>{step.sources && <div className="exec-refs"><span className="exec-refs-label">Referencing sources:</span><div className="exec-refs-list">{step.sources.map((source) => <span className="exec-ref-chip" key={source}><FileText size={12} /> {source}</span>)}</div></div>}</div></div>;
}

export default Tasks;
