import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateMutation } from "../slices/userApiSlice";
import { setCredential } from "../slices/authSlices";
import { toast } from 'react-toastify';


function Profile() {
  const [imagePreview, setImagePreview] = useState(
    "181-1814767_person-svg-png-icon-free-download-profile-icon.png"
  );

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const [updateProfile] = useUpdateMutation()
  const dispatch = useDispatch()

  const {userInfo} = useSelector((state)=>state.auth);

  const navigate = useNavigate() 

    useEffect(()=>{
      if(!userInfo){
        navigate('/login')
      }else{
         setName(userInfo.name);
         setEmail(userInfo.email);
         setMobile(userInfo.mobile)
      }
    },[navigate, userInfo])


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


  const submitUpdateHandler = async (e) => {
    e.preventDefault();

    // Regular expression for password validation (at least 6 characters with at least one special character)

    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z0-9]).{6,}$/;
    const mobileRegex = /^(?![0-5])\d{10}$/;
    const nameRegex = /^[^\s]+(\s[^\s]+)*$/;

    // Check if any field is empty
    if (!name || !mobile || !email) {
      toast.error("All fields should be filled");
    } else if (!name.match(nameRegex)) {
        toast.error("Name cannot contain consecutive spaces");
    } else if (!mobile.match(mobileRegex)) {
        toast.error(
            "Enter a valid mobile number"
            );
        } else if (!email.match(emailRegex)) {
          toast.error("Invalid email address");
    } else if (password && !password.match(passwordRegex)) {
      toast.error(
        "Password must be at least 6 characters and contain at least one special character"
      );
    } else if (password && password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
        try {
            const res = await updateProfile({
              _id: userInfo._id,
              name,
              email,
              password,
              mobile
            }).unwrap();
            console.log(res);
            dispatch(setCredential(res));
            toast.success('Profile updated successfully');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
    }
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
              <input onChange={(e)=>setName(e.target.value)}
                placeholder="" type="text" value={name}
                className="rounded-md w-full border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input onChange={(e)=>setMobile(e.target.value)}
                placeholder="" type="text" value={mobile}
                className="rounded-md w-full border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input onChange={(e)=>setEmail(e.target.value)}
                placeholder="" type="email" value={email}
                className="rounded-md border w-full border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter New Password" type="password" 
                className="rounded-md border w-full border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <div>
              <input onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" type="password"
                className="rounded-md border w-full border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"              />
            </div>
            <dir>
            <button onClick={submitUpdateHandler}
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
