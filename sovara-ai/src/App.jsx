import { useState } from 'react'
import TopAppBar from './components/static/Header.jsx'
import Sidebar from './components/static/Sidebar.jsx'
import * as AIWorkspacePage from './pages/AI_Workspace.jsx'
import * as ApprovalsPage from './pages/Approvals.jsx'
import * as DashboardPage from './pages/Dashboard.jsx'
import * as DeliverablesPage from './pages/Deliverables.jsx'
import * as DocumentsPage from './pages/Documents.jsx'
import * as KnowledgeHubPage from './pages/Knowlegde_Hub.jsx'
import * as SecurityCenterPage from './pages/Security_Center.jsx'
import * as TasksPage from './pages/Tasks.jsx'
import './App.css'

function EmptyPage() {
  return <main className="flex-1 overflow-y-auto mt-xl p-gutter md:p-margin" />
}

const PAGES = {
  dashboard: { label: 'Dashboard', component: DashboardPage.default || EmptyPage },
  workspace: { label: 'AI Workspace', component: AIWorkspacePage.default || EmptyPage },
  tasks: { label: 'Tasks', component: TasksPage.default || EmptyPage },
  knowledge: { label: 'Knowledge Hub', component: KnowledgeHubPage.default || EmptyPage },
  documents: { label: 'Documents', component: DocumentsPage.default || EmptyPage },
  deliverables: { label: 'Deliverables', component: DeliverablesPage.default || EmptyPage },
  approvals: { label: 'Approvals', component: ApprovalsPage.default || EmptyPage },
  security: { label: 'Security Center', component: SecurityCenterPage.default || EmptyPage },
}

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard')
  const page = PAGES[currentTab]
  const Page = page?.component || EmptyPage

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Sidebar currentTab={currentTab} onNavigate={setCurrentTab} />
      <TopAppBar breadcrumb={page?.label || 'Settings'} />
      <div className="md:ml-[280px] pt-[64px] min-h-screen flex">
        <Page />
      </div>
    </div>
  )
}

export default App
