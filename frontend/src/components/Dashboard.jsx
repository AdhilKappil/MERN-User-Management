import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useGetUsersDataMutation, usePutBlockUserMutation, useDeleteUserMutation } from "../slices/adminSlices"
import { useEffect, useState } from "react";

function Dashboard() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(null);
    const [data, setData] = useState(true);

    const [getUsersData] = useGetUsersDataMutation();
    const [putBlockUser] = usePutBlockUserMutation();
    const [deleteUser] = useDeleteUserMutation();


    useEffect(() => {
        async function fetchUser() {
          const res = await getUsersData().unwrap("");
          setUsers(res.user);
        }
        fetchUser();
      }, [data, getUsersData]);

      const filteredUsers = users.filter((user) => {
        const userName = user.name.toLowerCase();
        const userEmail = user.email;
        const searchValue = search.toLowerCase();
        return userName.includes(searchValue), userEmail.includes(searchValue);
      });

      const handleDelete = async () => {
        if (userId) {
          console.log(userId, "userlistscreenHandleDelete");
          await deleteUser(userId).unwrap("");
          setData((prevData) => !prevData);
          setUserId(null);
          setShowModal(false);
        }
      };

      const handleDeleteClick = (userId) => {
        setUserId(userId);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setUserId(null);
        setShowModal(false);
      };
      const handleBlockUnblockUser = async (userId) => {
        const response = await putBlockUser(userId).unwrap("");
        const updatedUsers = users.map((user) => {
          if (user._id === userId) {
            return {
              ...user,
              isBlocked: response.isBlocked, // Update the user's isBlocked status
            };
          }
          return user;
        });
    
        setUsers(updatedUsers);
      };

      console.log(users);

  return (
    <div className="h-svh flex items-center justify-center">
    <div className="overflow-x-auto h-3/5 w-3/5 max-lg:w-ful p-5 max-lg:px-4 rounded-md border-2 shadow-md bg-white">
        <div className="flex justify-around max-sm:grid items-center">
           <div>
            <h1 className="mb-5 text-3xl font-bold max-lg:text-xl">User Management</h1>
           </div>
           <div className="flex ">
           <input
                placeholder="Search Users"
                className="rounded-md rounded-br-none rounded-tr-none border max-lg:py-2 border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"
              />
                   <button  value="Search" className="bg-blue-500  max-lg:text-xs p-2 hover:cursor-pointer rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors py-[12px]">Search</button>
           </div>
        </div>
  <table className="min-w-full bg-white border border-gray-300 mt-3">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-2">Name</th>
        <th className="border border-gray-300 p-2">Email</th>
        <th className="border border-gray-300 p-2">Mobile</th>
        <th className="border border-gray-300 p-2 w-44">Action</th>
      </tr>
    </thead>
    <tbody>
     {users.map((obj, index)=>{
        return (
            <tr key={index} className="border-b border-gray-300">
            <td className="border-r border-gray-300 p-2">{obj.name}</td>
            <td className="border-r border-gray-300 p-2">{obj.email}</td>
            <td className="border-r border-gray-300 p-2">{obj.mobile}</td>
            <td className="flex justify-center space-x-5">
                <button className="mt-2"><FaUserEdit size={25}/></button>
                <button className="mt-2"><MdDelete size={25}/></button>
                <button className="mt-2">Block</button>
                
            </td>
          </tr>
        )
     })}
    </tbody>
  </table>
</div>
</div>
  )
}

export default Dashboard