import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Window & Door Lead Generation UK | Reach Eyeballs',
  description: 'Reach Eyeballs helps UK window and door companies generate exclusive, qualified homeowner leads and booked appointments through specialist lead generation campaigns.',
  keywords: ['window company lead generation UK', 'window and door leads UK', 'window replacement leads', 'door installation leads', 'double glazing lead generation', 'window marketing agency UK', 'appointment setting for window companies'],
  openGraph: { title: 'Window & Door Lead Generation UK | Reach Eyeballs', description: 'Exclusive, qualified homeowner leads and booked appointments for UK window and door companies.', type: 'website' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
