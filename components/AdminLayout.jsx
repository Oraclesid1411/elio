import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    console.log("token")
    console.log(token)
    if (!token && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <header style={{ padding: 10, backgroundColor: '#222', color: 'white' }}>
        <h2>ELIO Admin Panel</h2>
      </header>
      <nav style={{ padding: 10, backgroundColor: '#eee' }}>
        <Link href="/admin">Dashboard</Link> |{' '}
        <Link href="/admin/utilisateurs">Utilisateurs</Link> |{' '}
        <Link href="/admin/abonnements">Abonnements</Link> |{' '}
        <Link href="/admin/services">Services</Link> |{' '}
        <Link href="/admin/categories">Catégories</Link>
      </nav>
      <main style={{ padding: 20 }}>{children}</main>
    </div>
  );
}
