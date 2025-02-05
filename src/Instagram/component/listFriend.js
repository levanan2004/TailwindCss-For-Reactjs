import { CircleAvatar } from "./circle_avatar";
const myList = [
    {
        "urlAvatar": "https://yt3.ggpht.com/65HWauZyDcJWGkG6DwYaSFUUAGdMy2PJzHBnjqScfK07iLpduyjjBGLEUiyJqf5gFMwKrXRXyRo=s88-c-k-c0x00ffffff-no-rj",
        "name": "John Wich",
        "status": true
    },
    {
        "urlAvatar": "https://yt3.ggpht.com/65HWauZyDcJWGkG6DwYaSFUUAGdMy2PJzHBnjqScfK07iLpduyjjBGLEUiyJqf5gFMwKrXRXyRo=s88-c-k-c0x00ffffff-no-rj",
        "name": "SuperMan",
        "status": false
    },
    {
        "urlAvatar": "https://avatars.githubusercontent.com/u/141321385?v=4",
        "name": "The Flash",
        "status": true
    },
];
const ListFriend = () => {
    return (
        <div className="w-full h-full flex gap-x-4">
            {myList.map((item, index) => (
                <div className="h-[84px] w-[64px] gap-x-1">
                    <CircleAvatar key={index} url={item.urlAvatar} hasStory={item.status} size={56} onClick={() => { }} />
                    <div className="text-[12px] h-[16px]">
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ListFriend;