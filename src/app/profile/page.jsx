import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; 

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
//   console.log("User authenticated:", isUserAuthenticated);

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center border-b pb-4">
          Welcome to Your Profile
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
          Hello, <span className="font-semibold text-gray-800">User</span>!
        </p>
      </div>
    </div>
  );
};

export default Profile;