import { TimelineEvent } from '@/types/database';
import { cn } from '@/lib/utils';
import { 
  Camera, 
  Award, 
  BookOpen, 
  Image, 
  GraduationCap,
  User
} from 'lucide-react';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast?: boolean;
}

const typeConfig = {
  biografico: { icon: User, color: 'bg-warm-gray' },
  obra: { icon: Camera, color: 'bg-primary' },
  exposicao: { icon: Image, color: 'bg-accent' },
  publicacao: { icon: BookOpen, color: 'bg-amber-glow' },
  premio: { icon: Award, color: 'bg-primary' },
  pesquisa: { icon: GraduationCap, color: 'bg-muted-foreground' },
};

export function TimelineItem({ event, isLast }: TimelineItemProps) {
  const config = typeConfig[event.tipo];
  const Icon = config.icon;

  return (
    <div className="group relative flex gap-6 pb-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[23px] top-12 h-full w-px bg-border" />
      )}
      
      {/* Dot with icon */}
      <div className={cn(
        'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm transition-all duration-300',
        config.color,
        'group-hover:scale-110'
      )}>
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-2xl font-medium text-primary">
            {event.ano}
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {event.tipo}
          </span>
        </div>
        <h3 className="mt-1 font-display text-lg text-foreground">
          {event.titulo}
        </h3>
        {event.descricao && (
          <p className="mt-1 text-sm text-muted-foreground">
            {event.descricao}
          </p>
        )}
      </div>
    </div>
  );
}
