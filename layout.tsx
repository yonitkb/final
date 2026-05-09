import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'המרוץ להנצחה | אתר מחקרי',
  description: 'אתר תזה מוזיאלי על הנצחה אלטרנטיבית, ארכיון דיגיטלי ותרבות חזותית לאחר 7 באוקטובר.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
