import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Download 
} from 'lucide-react';

const RECENT_DELIVERABLES = [
  {
    id: 'TSK-8921',
    title: 'Q3 Security Audit Report',
    ref: 'Ref: TSK-8921',
    date: 'Oct 12, 2023',
    extension: '.docx',
    extColor: 'text-blue-400 bg-blue-900/20',
    status: 'approved',
  },
  {
    id: 'TSK-9044',
    title: 'Vendor Risk Assessment Matrix',
    ref: 'Ref: TSK-9044',
    date: 'Oct 14, 2023',
    extension: '.xlsx',
    extColor: 'text-green-400 bg-green-900/20',
    status: 'pending',
  },
  {
    id: 'TSK-8810',
    title: 'Executive Briefing: Incident Alpha',
    ref: 'Ref: TSK-8810',
    date: 'Oct 10, 2023',
    extension: '.pdf',
    extColor: 'text-red-400 bg-red-900/20',
    status: 'approved',
  },
];

const ALL_DOCUMENTS = [
  {
    id: 1,
    name: 'Data Privacy Addendum v2',
    created: 'Oct 08, 2023',
    author: 'Sarah Jenkins',
    status: 'approved',
    statusColor: 'bg-primary',
  },
  {
    id: 2,
    name: 'Q4 OKR Planning Doc',
    created: 'Oct 05, 2023',
    author: 'Mike Chen',
    status: 'draft',
    statusColor: 'bg-secondary',
  },
];

export default function DeliverablesContent({ onExport }) {
  return (
    <main className="flex-1 overflow-y-auto mt-xl p-gutter md:p-margin">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <header className="mb-lg">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-2">
            Deliverables
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Generated artifacts and final outputs ready for external distribution or archival.
          </p>
        </header>

        {/* Recent Deliverables Section */}
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">
          Recent Deliverables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md mb-xl">
          {RECENT_DELIVERABLES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              className="bg-surface-bright rounded-DEFAULT border border-outline-variant hover:border-primary/50 transition-colors p-md flex flex-col group min-h-[160px]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`font-label-mono text-label-mono px-2 py-1 rounded ${item.extColor}`}>
                  {item.extension}
                </span>
                <span className={`bg-surface-container px-2 py-1 rounded text-label-mono font-label-mono flex items-center gap-1 border border-outline-variant/20 ${
                  item.status === 'approved' ? 'text-primary' : 'text-secondary'
                }`}>
                  {item.status === 'approved' ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                  {item.status}
                </span>
              </div>
              <h3 className="font-body-lg text-body-lg font-medium text-on-surface mb-1">
                {item.title}
              </h3>
              <p className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase tracking-wider">
                {item.ref}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  {item.date}
                </span>
                <button 
                  onClick={() => onExport && onExport(item)}
                  className="font-button text-button text-primary hover:text-primary-fixed-dim transition-colors flex items-center gap-1"
                >
                  Export <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Documents Section */}
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">
          All Documents
        </h3>
        <div className="bg-surface rounded-DEFAULT border border-outline-variant/30 overflow-hidden">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 border-b border-outline-variant/30 bg-surface-container-lowest font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
            <div>NAME</div>
            <div>CREATED</div>
            <div>AUTHOR</div>
            <div>STATUS</div>
          </div>
          <div className="divide-y divide-outline-variant/20">
            {ALL_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 items-center hover:bg-surface-container/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-on-surface-variant flex-shrink-0" />
                  <span className="font-body-md text-on-surface">{doc.name}</span>
                </div>
                <div className="font-label-mono text-on-surface-variant">{doc.created}</div>
                <div className="font-body-sm text-on-surface-variant">{doc.author}</div>
                <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
                  <div className={`w-2 h-2 rounded-full ${doc.statusColor}`} />
                  {doc.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}