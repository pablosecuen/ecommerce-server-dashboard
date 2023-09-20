import "./../globals.css";
import type { Metadata } from "next";

import Providers from "./providers";
import { Layout } from "./components/layout/layout";
export const metadata: Metadata = {
  title: "DashBoardLayout",
  description: "",
};

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
