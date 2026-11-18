import "./globals.css";

export const metadata = {
  title: "Athul C — Full Stack Developer",
  description:
    "Portfolio of Athul C, a full stack developer building modern, scalable and user-focused web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
