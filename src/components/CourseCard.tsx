import { Clock, IndianRupee, ArrowRight, Check } from 'lucide-react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  fee: string;
  originalFee?: string;
  discount?: string;
  highlights: string[];
  accentColor: 'amber' | 'teal';
  software?: string;
  includesPanel?: boolean;
}

const CourseCard = ({
  icon,
  title,
  subtitle,
  duration,
  fee,
  originalFee,
  discount,
  highlights,
  accentColor,
  software,
  includesPanel,
}: CourseCardProps) => {
  const isAmber = accentColor === 'amber';

  return (
    <div className="cinema-card group h-full flex flex-col hover:border-primary/50 transition-all duration-500">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${isAmber
              ? 'bg-primary/10 group-hover:glow-amber'
              : 'bg-secondary/10 group-hover:glow-amber'
              }`}
          >
            {icon}
          </div>
          {discount && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-500 text-white animate-pulse">
              {discount} OFF
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className={`text-sm font-medium ${isAmber ? 'text-primary' : 'text-secondary'}`}>
          {subtitle}
        </p>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 border-y border-border bg-muted/30 flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">{duration}</span>
        </div>
        <div className="flex flex-col">
          {originalFee && (
            <span className="text-xs text-muted-foreground line-through decoration-red-500/50 decoration-2">
              ₹{originalFee}
            </span>
          )}
          <div className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-primary">{fee}</span>
          </div>
        </div>
        {software && (
          <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {software}
          </span>
        )}
      </div>

      {/* Highlights */}
      <div className="p-6 flex-grow">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
          What You'll Learn
        </h4>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isAmber ? 'bg-primary/20' : 'bg-secondary/20'
                }`}>
                <Check className={`w-3 h-3 ${isAmber ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <span className="text-sm text-muted-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0 mt-auto">
        <a
          href="https://wa.me/918555952544"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 group/btn ${isAmber
            ? 'bg-primary text-primary-foreground hover:shadow-[0_4px_20px_hsl(38_92%_50%/0.4)]'
            : 'bg-secondary text-secondary-foreground hover:shadow-[0_4px_20px_hsl(45_100%_55%/0.4)]'
            }`}
        >
          Enroll Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
