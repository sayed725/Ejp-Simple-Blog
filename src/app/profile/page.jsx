import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; 

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  const { email, family_name, given_name, picture } = user || {};
//   console.log("User authenticated:", isUserAuthenticated);



  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

//   console.log(user)

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center border-b pb-4">
          Welcome to Your Profile
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
          Hello, <span className="font-semibold text-gray-800">{given_name + " " + family_name}</span>!
        </p>
        <div className="px-6 py-10 rounded  md:w-2/3 flex gap-6">
        {/* <div>
            <img src={picture} alt="profilePic"  width={100}
            height={100}
            className="rounded-full border" />
         
        </div> */}
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-wider pb-1">
            Email:{user && email}
          </h1>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;