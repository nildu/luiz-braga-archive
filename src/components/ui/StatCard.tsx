import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  delay?: number;
}

export function StatCard({ title, value, icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="stat-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="section-subtitle mb-2">{title}</p>
          <p className="font-display text-4xl font-medium text-foreground md:text-5xl">
            {value}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
