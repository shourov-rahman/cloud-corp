import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between">
      <nav className="text-white text-2xl">
        <Link href="./">Cloud Crop</Link>
      </nav>
      <nav className="text-white text-2xl space-x-4">
        <Link href="./performance">Performance</Link>
        <Link href="./reliability">Reliability</Link>
        <Link href="./scale">Scale</Link>
      </nav>
    </header>
  );
};

export default Header;
