import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-500 text-white">
      <Link href="/">
        <h1 className="text-xl font-bold">Personal Diary</h1>
      </Link>
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
