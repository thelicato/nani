const logoPath = '/logo.svg';

type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'h-16 w-16',
  md: 'h-24 w-24',
  lg: 'h-32 w-32 sm:h-40 sm:w-40',
};

export function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  return (
    <img
      src={logoPath}
      alt="Nani logo"
      className={`${sizeClasses[size]} rounded-full shadow-xl shadow-orange-200/80 ${className}`}
    />
  );
}
