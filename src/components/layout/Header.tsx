import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

/**
 * Global Header Component (Server Component)
 * Keeps the interactive Navbar permanently sticky at top: 0 across all scroll positions.
 */
export function Header() {
  return (
    <>
      {/* Informational Contact & Working Hours Bar */}
      <TopBar />

      {/* Constant Sticky Navigation Bar (always visible while scrolling) */}
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>
    </>
  );
}
