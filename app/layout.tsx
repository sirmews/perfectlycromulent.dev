import "./globals.css";

export const metadata = {
  title: "Nav is Perfectly Cromulent",
  description:
    "A homepage for all things Nav, a perfectly cromulent product engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
