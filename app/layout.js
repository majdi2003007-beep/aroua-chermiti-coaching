import './globals.css';

export const metadata = {
  title: 'Aroua Chermiti Coaching | مرافقة تربوية ومهنية',
  description:
    'مرافقة تربوية ومهنية للأولياء، الأطفال والمراهقين: تعديل السلوك، إرشاد أسري، Coaching مدرسي ودورات تدريبية.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
