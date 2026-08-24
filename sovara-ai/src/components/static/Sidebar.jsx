import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  LayoutDashboard,
  Sparkles,
  ListTodo,
  BookOpen,
  FileText,
  FileOutput,
  ClipboardCheck,
  Settings,
  Plus
} from 'lucide-react';

const MENU_GROUPS = [
  {
    title: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'workspace', label: 'AI Workspace', icon: Sparkles },
      { id: 'tasks', label: 'Tasks', icon: ListTodo },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { id: 'knowledge', label: 'Knowledge Hub', icon: BookOpen },
      { id: 'documents', label: 'Documents', icon: FileText },
    ],
  },
  {
    title: 'Outputs',
    items: [
      { id: 'deliverables', label: 'Deliverables', icon: FileOutput },
      { id: 'approvals', label: 'Approvals', icon: ClipboardCheck },
    ],
  },
  {
    title: 'Governance',
    items: [
      { id: 'security', label: 'Security Center', icon: Shield },
    ],
  },
];

export default function Sidebar({ currentTab, onNavigate }) {
  const [internalTab, setInternalTab] = useState('dashboard');
  const activeTab = currentTab || internalTab;

  const handleSelect = (id) => {
    setInternalTab(id);
    if (onNavigate) onNavigate(id);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] z-40 bg-surface-container border-r border-outline-variant/30 flex flex-col p-md hidden md:flex">
      {/* Brand Header */}
      <div className="flex items-center gap-sm mb-lg">
        <img
          src="/assets/logo.png"
          alt="Sovara AI"
          className="w-8 h-8 flex-shrink-0 object-contain"
        />
        <div>
          <h1 className="font-display-md text-display-md text-on-surface tracking-tighter leading-none">
            SOVARA AI
          </h1>
          <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-1">
            Sovereign Intel
          </p>
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-primary-container text-on-surface font-button text-button w-full py-2 px-4 rounded mb-md hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <Plus size={16} />
        <span>New Workspace</span>
      </motion.button>

      {/* Navigation Group Items */}
      <div className="flex-1 overflow-y-auto pr-2 pb-md space-y-4">
        {MENU_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-label-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider mb-2 px-3">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-1 font-body-sm text-body-sm tracking-tight">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors text-left relative z-10 ${
                        isActive
                          ? 'text-primary font-bold'
                          : 'text-on-surface-variant font-medium hover:text-on-surface'
                      }`}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <span>{item.label}</span>
                    </button>

                    {/* Active Background Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-primary-container/10 border-r-2 border-primary rounded z-0"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer & Status indicator */}
      <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-col gap-2">
        <motion.button
          whileHover={{ x: 4 }}
          onClick={() => handleSelect('settings')}
          className={`flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${
            activeTab === 'settings'
              ? 'text-primary font-bold'
              : 'text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface'
          }`}
        >
          <Settings size={18} />
          <span>Settings</span>
        </motion.button>

        <div className="flex items-center gap-2 px-3 text-on-surface-variant font-label-mono text-label-mono pt-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Local Processing Active</span>
        </div>
      </div>
    </aside>
  );
}