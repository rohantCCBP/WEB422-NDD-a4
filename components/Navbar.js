import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {" "}
          <Link href="/">
            <span className="mr-4 hover:text-gray-400 cursor-pointer">
              Home
            </span>
          </Link> <br/>
          <Link href="/products">
            <span className="cursor-pointer text-2xl font-bold">
              Fake Store
            </span>
          </Link>
          <div>
            <Link href="/about">
              <span className="hover:text-gray-400 cursor-pointer">About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
