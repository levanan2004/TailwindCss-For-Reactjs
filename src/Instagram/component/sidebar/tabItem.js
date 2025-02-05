const TabItem = ({ icon, name }) => {
    return (
        <div className='flex gap- p-2 hover:bg-gray-100 hover:cursor-pointer transition-colors rounded'>
            <div className="size-[24px]">{icon}</div><span className="text-[16px] ml-4">{name}</span>
        </div>
    )
}
export default TabItem;