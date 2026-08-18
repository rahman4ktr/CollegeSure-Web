export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Sanity Studio — CollegeSure',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#04164B]">
      {children}
    </div>
  );
}
