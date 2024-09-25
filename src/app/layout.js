import "./globals.css";
import Home from "./app/page.js";

export const metadata = {
  title: "METIS",
  description: "Study in style",
};

export default function RootLayout({ children }) {
  return (
    <>
    <Home />
    </>
  );
}
