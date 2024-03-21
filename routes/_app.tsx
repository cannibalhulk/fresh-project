import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx"
export default function App({ Component }: PageProps) {
  return (
    <html data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="max-w-screen-lg mx-auto ">
        <Navbar />
        <Component />
      </body>
    </html>
  );
}
