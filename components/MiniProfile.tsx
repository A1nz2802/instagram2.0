
const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]" 
        src="https://i.imgur.com/8aGvu09.jpg" 
        alt="" 
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">leydi.nu</h2>
        <h3 className="text-sm text-gray-400">Leydi Nuñez</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile;