export const CircleAvatar = ({ url, size, onClick, hasStory }) => {
    return (
        <div className={`${hasStory ? "rounded-full border-red-600 border-[2px] " : "border-none p-1"} p-[2px]`}>
            <div className="flex items-center justify-center">

                <img src={url} style={{ width: `${size}px`, height: `${size}px` }} onClick={onClick} className='rounded-full border-[1px] border-gray-500' />
            </div>
        </div>
    )
}