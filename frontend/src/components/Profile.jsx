function Profile() {
  return (
    <div className="flex justify-center h-svh items-center">
      <div className="h-4/5 w-4/5 flex rounded-md border-2 shadow-md">
        <div className="w-1/2">
          <div className=" h-3/4 flex justify-center items-center">
          <div className="h-72 w-72 rounded-ful">
            <img className="rounded-full" src="181-1814767_person-svg-png-icon-free-download-profile-icon.png" alt="" />
          </div>
          </div>
          <div className=" h-1/4 flex justify-center">
            <input  type="file"/>
          </div>
        </div>
        <div className="w-1/"></div>
      </div>
    </div>
  );
}

export default Profile;
