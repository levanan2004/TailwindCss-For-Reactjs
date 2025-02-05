import SuggestItem from "./suggestItem";
import { CircleAvatar } from "../circle_avatar";
const myListSuggest = [
    {
        "urlAvatar": "https://yt3.ggpht.com/65HWauZyDcJWGkG6DwYaSFUUAGdMy2PJzHBnjqScfK07iLpduyjjBGLEUiyJqf5gFMwKrXRXyRo=s88-c-k-c0x00ffffff-no-rj",
        "name": "John Wich",
    },
    {
        "urlAvatar": "https://yt3.ggpht.com/65HWauZyDcJWGkG6DwYaSFUUAGdMy2PJzHBnjqScfK07iLpduyjjBGLEUiyJqf5gFMwKrXRXyRo=s88-c-k-c0x00ffffff-no-rj",
        "name": "SuperMan",
    },
    {
        "urlAvatar": "https://avatars.githubusercontent.com/u/141321385?v=4",
        "name": "The Flash",
    },
];
const SuggestComponent = () => {
    return (
        <div className="w-full h-full mt-[20px] ">
            {/* My Account */}
            <div className=" flex gap-x-1 w-[319px] h-[44px]">
                <div className="flex-[1]">

                    <CircleAvatar url='https://avatars.githubusercontent.com/u/141321385?v=4' size={44} onClick={() => { }} />
                </div>
                <div className="flex-[3]">
                    <p className="font-[600] text-[14px]">an2k20</p>
                    <span className="text-[14px] text-gray-500">An Lê</span>
                </div>
                <div className="flex-[1]">
                    <a href="#" className="text-[12px] flex-[5] font-semibold text-[rgb(0,149,246)]">Switch</a>
                </div>
            </div>
            {/* cách ngang */}
            <div className="flex gap-x-1 w-[319px] h-[20px] mt-6 mb-3">
                <p className="font-[600] text-[14px] flex-[4] ml-2  text-gray-500">Suggested for you</p>
                <a className="text-[12px] flex-[1] font-semibold text-black]">See All</a>
            </div>
            {/* Suggest for you */}
            <div className="space-y-4">

                {myListSuggest.map((item, index) => (
                    <SuggestItem key={index} urlAvatar={item.urlAvatar} name={item.name} />
                ))}
            </div>
        </div>
    )
}
export default SuggestComponent;