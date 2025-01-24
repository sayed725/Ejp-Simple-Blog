import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const NewNavbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <h2>My Blog</h2>
        </div>
        <div>
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                className="transition duration-300 hover:text-gray-200 hover:underline"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-300 hover:text-gray-200 hover:underline"
                href="/profile"
              >
                Profile
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    href="/api/auth/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 hover:text-black rounded-md text-sm font-medium transition duration-300"
                    href="/api/auth/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 hover:text-black rounded-md text-sm font-medium transition duration-300"
                    href="/api/auth/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;