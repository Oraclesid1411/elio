import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getStatusColor(status) {
  switch (status.toUpperCase()) {
    case 'VENDU':
      return 'status-vendu';
    case 'LOUE':
      return 'status-loue';
    case 'OFFERT':
      return 'status-offert';
    case 'OPEN':
      return 'bg-green-100 text-green-800';
    case 'CLOSED':
      return 'bg-red-100 text-red-800';
    case 'IN_PROGRESS':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return '';
  }
}