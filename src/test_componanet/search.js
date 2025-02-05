const Box = ({ backgroundBoxColor, iconBox, nameBox }) => {
    return (
        <div className={`h-28 py-7 px-5 w-full border-[1px] border-gray-200 rounded-md ${backgroundBoxColor} text-indigo-800 text-center transition-colors group hover:bg-black hover:bg-opacity-80 hover:text-white `}>
            <div className="w-full justify-center items-center flex text-indigo-800 group-hover:text-white">
                <ion-icon name={`${iconBox}`}></ion-icon>
            </div>
            <span>{nameBox}</span>
        </div>
    )
}
const Search = () => {
    const jobs = [
        { backgroundBoxColor: 'bg-red-200', iconBox: 'search-outline', nameBox: 'Furniture' },
        { backgroundBoxColor: 'bg-blue-200', iconBox: 'heart-outline', nameBox: 'Nurse.' },
        { backgroundBoxColor: 'bg-green-200', iconBox: 'cart-outline', nameBox: 'Clothing' },
        { backgroundBoxColor: 'bg-yellow-200', iconBox: 'home-outline', nameBox: 'Travel' },
        { backgroundBoxColor: 'bg-purple-200', iconBox: 'build-outline', nameBox: 'Police' },
        { backgroundBoxColor: 'bg-pink-200', iconBox: 'people-outline', nameBox: 'Doctor' },
        { backgroundBoxColor: 'bg-gray-200', iconBox: 'school-outline', nameBox: 'Education' },
        { backgroundBoxColor: 'bg-indigo-200', iconBox: 'camera-outline', nameBox: 'Property' }
    ];
    return (
        // background trắng
        <div className="bg-white h-[25rem] w-[34rem] font-poppins">
            {/* cover element: search, list jobs */}
            <div className="mx-10 my-10">
                {/* search */}
                <div className="flex space-x-4">
                    <div className="border-[2px] border-gray-400 rounded-md flex w-full">
                        <div className="flex justify-center items-center h-full w-16">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <input type="text" className="w-full" placeholder="Search for a part-time job" />
                    </div>
                    <button className="flex-none bg-[#281A51] text-white rounded-md px-4 py-3 space-x-2">
                        <ion-icon name="map-outline"></ion-icon>
                        <span>Use map</span>
                    </button>
                </div>
                {/* list jobs */}
                <div className="grid grid-cols-4 gap-2 mt-8">
                    {jobs.map((job, index) => (
                        <Box
                            key={index}
                            backgroundBoxColor={job.backgroundBoxColor}
                            iconBox={job.iconBox}
                            nameBox={job.nameBox}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Search;