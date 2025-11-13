export const NavBar = async () => {
    return (
        <>
            <div className="top-0 absolute h-16 w-full bg-neutral-900 flex items-center justify-between p-8 border-b-[0.5px] border-teal-900">
                <div className="text-teal-500 cursor-pointer font-bold text-2xl">
                    Shorty URL
                </div>
                <div className="flex items-center justify-between gap-8  font-medium text-lg transition duration-200">
                    <div className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200">login</div>
                    <div className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200">signup</div>
                </div>
            </div>
        </>
    )
} 