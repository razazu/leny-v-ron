export const metadata = {
  title: "Leny V Ron - ניהול תוכן",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ height: "100vh" }}>{children}</div>;
}
