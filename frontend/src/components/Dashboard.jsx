import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="h-svh flex items-center justify-center">
    <div className="overflow-x-auto h-3/5 w-3/5 max-lg:w-ful p-5 max-lg:px-4 rounded-md border-2 shadow-md">
        <div className="flex justify-around max-sm:grid">
           <div>
            <h1 className="mb-5 text-3xl font-bold max-lg:text-xl">User Management</h1>
           </div>
           <div>
           <input
                placeholder="Search Users"
                className="rounded-md border max-lg:py-2 border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500"
              />
                   <input type="button" value="Search" className="bg-blue-500 max-lg:text-xs p-2 hover:cursor-pointer rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"></input>
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
      <tr className="border-b border-gray-300">
        <td className="border-r border-gray-300 p-2">Adhil</td>
        <td className="border-r border-gray-300 p-2">adhil@gmail.com</td>
        <td className="border-r border-gray-300 p-2">9876543456</td>
        <td className="flex justify-center space-x-5">
            <button className="mt-2"><FaUserEdit size={25}/></button>
            <button className="mt-2"><MdDelete size={25}/></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Dashboard