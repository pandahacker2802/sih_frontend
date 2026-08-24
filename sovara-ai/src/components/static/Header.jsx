import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, HelpCircle, Bell, User } from 'lucide-react';

export default function TopAppBar({ breadcrumb = 'Dashboard' }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 right-0 left-0 md:left-[280px] z-30 bg-surface-container-low border-b border-outline-variant/20 flex items-center justify-between h-[64px] px-gutter">
      {/* Left: Breadcrumbs & Mobile Brand */}
      <div className="flex items-center gap-md">
        <nav className="hidden md:flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant uppercase">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-on-surface-variant/60" />
          <span className="text-on-surface font-medium">{breadcrumb}</span>
        </nav>
        <span className="font-display-lg text-display-lg text-on-surface md:hidden leading-none">
          Sovara AI
        </span>
      </div>

      {/* Center: Global Search Input */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-surface-container px-3 py-1.5 rounded border border-outline-variant/30 w-64 focus-within:border-primary/50 transition-colors">
        <Search className="w-4 h-4 text-on-surface-variant/70 mr-2 flex-shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="bg-transparent border-none outline-none focus:ring-0 text-sm font-body-sm text-on-surface placeholder-on-surface-variant/50 w-full p-0"
        />
      </div>

      {/* Right: Actions & User Avatar */}
      <div className="flex items-center gap-sm text-on-surface-variant">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 hover:text-primary transition-colors rounded-full"
          aria-label="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 hover:text-primary transition-colors rounded-full relative"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-1 rounded-full bg-surface-container-high border border-outline-variant/30 hover:border-primary/50 transition-colors w-8 h-8 flex items-center justify-center overflow-hidden"
          aria-label="User Profile"
        >
          <User className="w-4 h-4 text-on-surface" />
        </motion.button>
      </div>
    </header>
  );
}