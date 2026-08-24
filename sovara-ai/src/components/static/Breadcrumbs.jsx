import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({
  items = [
    { label: 'Home', href: '#' },
    { label: 'Dashboard', href: '#' }
  ],
  mobileTitle = 'Sovara AI'
}) {
  return (
    <div className="flex items-center gap-md">
      {/* Desktop Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb" 
        className="hidden md:flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant uppercase"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={item.label}>
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-on-surface-variant/60 flex-shrink-0" />
              )}

              {isLast || !item.href ? (
                <span className="text-on-surface font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )}
            </Fragment>
          );
        })}
      </nav>

      {/* Mobile Title Fallback */}
      <span className="font-display-lg text-display-lg text-on-surface md:hidden leading-none">
        {mobileTitle}
      </span>
    </div>
  );
}