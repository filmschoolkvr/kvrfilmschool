import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, CreditCard, MessageCircle, Users, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { WORKSHOP } from '@/lib/workshop';

interface WorkshopPopupProps {
  /** 'home' links to the workshop page; 'workshop' scrolls to the registration form */
  variant: 'home' | 'workshop';
  /** Delay before showing, so it appears after the loading screen */
  delayMs?: number;
}

const WorkshopPopup = ({ variant, delayMs = 3800 }: WorkshopPopupProps) => {
  const [open, setOpen] = useState(false);
  const storageKey = `workshop-popup-dismissed-${variant}`;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      /* storage unavailable — still show the popup */
    }
    const timer = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(timer);
  }, [storageKey, delayMs]);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      try {
        sessionStorage.setItem(storageKey, '1');
      } catch {
        /* ignore */
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-primary/40 bg-card">
        <div className="relative p-6 md:p-8 text-center">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide">2 DAYS WORKSHOP</span>
            </div>

            <DialogTitle className="font-display font-normal text-6xl md:text-7xl leading-[0.85] tracking-wide mb-1">
              Film Making
              <span className="block font-serif italic text-4xl md:text-5xl text-primary">from scratch</span>
            </DialogTitle>

            <DialogDescription className="text-xs tracking-[0.35em] text-muted-foreground mb-6">
              LEARN • PRACTICE • CREATE
            </DialogDescription>

            <div className="space-y-2 text-sm text-left mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                <CalendarDays className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold">{WORKSHOP.dates}</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <span>Venue &amp; timings shared via WhatsApp</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <span>Limited seats only</span>
              </div>
            </div>

            <a
              href={WORKSHOP.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary-hero justify-center mb-2"
            >
              <CreditCard className="w-5 h-5" />
              Pay &amp; Book Your Seat
            </a>
            <p className="text-xs text-muted-foreground mb-4">
              Secure payment via Razorpay · {WORKSHOP.paymentLabel}
            </p>

            {variant === 'home' ? (
              <Link
                to="/workshop"
                onClick={() => handleOpenChange(false)}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View workshop details
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <a
                href="#learn"
                onClick={() => handleOpenChange(false)}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See what you'll learn
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopPopup;
