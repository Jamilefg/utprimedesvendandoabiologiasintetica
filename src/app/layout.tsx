import "./globals.css";

export const metadata = {
  title: "UTPRIMERS",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="shortcut icon"
          href="utprime_logo_hd.png"
          type="image/x-icon"
        />
      </head>

      <body>
        <img className='imgBack' src="/1.gif" />
        {children}
      </body>
    </html>
  );
}
