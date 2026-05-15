type TrooBrandProps = {
  className?: string;
  compact?: boolean;
};

export const TrooWordmark = ({ className = '', compact = false }: TrooBrandProps) => {
  return (
    <span className={`troo-wordmark ${className}`} aria-label="Troo!">
      <span className="troo-wordmark__text">Troo</span>
      <span className="troo-wordmark__bang">!</span>
      {!compact && <span className="troo-wordmark__pulse" />}
    </span>
  );
};

export const TrooSigil = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`troo-sigil ${className}`} aria-hidden="true">
      <span className="troo-sigil__head" />
      <span className="troo-sigil__wing troo-sigil__wing--left" />
      <span className="troo-sigil__wing troo-sigil__wing--right" />
      <span className="troo-sigil__wing troo-sigil__wing--lower-left" />
      <span className="troo-sigil__wing troo-sigil__wing--lower-right" />
      <span className="troo-sigil__scan" />
    </span>
  );
};

export const TrooBrandLockup = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`troo-lockup ${className}`}>
      <TrooSigil />
      <TrooWordmark compact />
    </span>
  );
};
