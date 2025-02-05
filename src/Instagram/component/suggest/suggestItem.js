import { CircleAvatar } from "../circle_avatar";

const SuggestItem = ({ urlAvatar, name }) => {
    return (
        <div className=" flex gap-x-1 w-[319px] h-[44px]">
            <div className="flex-[1]">

                <CircleAvatar url={urlAvatar} size={44} onClick={() => { }} />
            </div>
            <div className="flex-[3]">
                <p className="font-[600] text-[14px]">{name}</p>
                <span className="text-[12px] text-gray-500">Suggested for you</span>
            </div>
            <a className="text-[12px] flex-1 font-semibold text-[rgb(0,149,246)] mt-2">Follow</a>

        </div>
    )
}
export default SuggestItem;