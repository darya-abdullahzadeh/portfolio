import Link from 'next/link';
import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
      <p className="mb-8 text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button href="/" variant="primary">
        Go Home
      </Button>
    </div>
  );
}

