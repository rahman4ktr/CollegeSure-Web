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
