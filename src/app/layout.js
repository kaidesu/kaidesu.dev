import "@/styles/globals.css";

export const metadata = {
  title: "kaidesu.dev",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-zinc-950 bg-[url('/grid.svg')] antialiased">
        {children}
      </body>
    </html>
  );
}
