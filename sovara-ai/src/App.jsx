import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Layout Components
import Sidebar from './components/static/Sidebar'
import Header from './components/static/Header'

// Page Components
import Dashboard from './pages/Dashboard'
import AIWorkspace from './pages/AI_Workspace'
import Tasks from './pages/Tasks'
import KnowledgeHub from './pages/Knowlegde_Hub'
import Documents from './pages/Documents'
import Deliverables from './pages/Deliverables'
import Approvals from './pages/Approvals'
import SecurityCenter from './pages/Security_Center'

export default function App() {
  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-[280px]">
        <Header />
        <main className="flex-1 mt-[64px] p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-workspace" element={<AIWorkspace />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/deliverables" element={<Deliverables />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/security-center" element={<SecurityCenter />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}