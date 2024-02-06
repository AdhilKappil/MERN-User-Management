import { useState } from "react";

function Profile() {
  const [imagePreview, setImagePreview] = useState(
    "181-1814767_person-svg-png-icon-free-download-profile-icon.png"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex justify-center h-svh items-center">
      <div className=" w-3/5 flex rounded-md border-2 shadow-md max-md:grid max-md:w-4/5 max-sm:w-full">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex ">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <img
              className="h-72 w-72 rounded-full max-md:ml-20"
              onClick={handleClick}
              src={imagePreview}
              alt="Profile"
            />
          </div>
        </div>
        <div className="md:w-1/2 grid gap-5 p-5">
            <div>
              <input
                placeholder="" 
                className="rounded-md w-full border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input
                placeholder="" 
                className="rounded-md w-full border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input
                placeholder=""
                className="rounded-md border w-full border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input
                placeholder=""
                className="rounded-md border w-full border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <dir>
            <button
              data-ripple-light="true"
              type="button"
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Update Profile
            </button>
            </dir>
        </div>
      </div>
    </div>
  );
}

export default Profile;
