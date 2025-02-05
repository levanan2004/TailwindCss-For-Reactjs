const UserProfile = () => {
    return (
        <div className="bg-white h-[40rem] w-[28rem] rounded-lg gap-x-5 font-poppins lg:h-[32rem] lg:w-[32rem] lg:flex">
            <img src="images/bgReview.jpg" className="w-28 h-28 border-[11px] border-gray-400  rounded-full  mt-10 ml-10" />

            <div className="space-y-7 m-10">
                {/* user name */}
                <div>
                    <h1 className="text-4xl text-cyan-400 font-bold">Lê Văn An</h1>
                    <h2 className="text-md mt-1">FullStack Developer</h2>
                </div>
                {/* rating, reviews, students */}
                <div className="text-md">
                    <p><ion-icon name="star-outline"></ion-icon> 4.9 Rating</p>
                    <p><ion-icon name="eye-outline"></ion-icon> 888,888 Reviews</p>
                    <p><ion-icon name="person-outline"></ion-icon> 1053 Students</p>
                </div>
                {/* description */}
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit mauris in nunc tincidunt, ac egestas elit mollis.</p>
                {/* Button */}
                <button className="border-2 border-gray-300 px-4 py-2 rounded-md">
                    Show more
                </button>
            </div>
        </div>
    )
}
export default UserProfile;