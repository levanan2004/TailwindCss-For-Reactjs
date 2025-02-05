import UserProfile from './test_componanet/userProfile';
import Search from './test_componanet/search';
import TweetComponent from './test_componanet/tweet';
import Video from './test_componanet/test';
import { CircleAvatar } from './Instagram/component/circle_avatar';
import SideBarComponent from './Instagram/component/sidebar/sidebar';
import ListFriend from './Instagram/component/listFriend';
import SuggestComponent from './Instagram/component/suggest/suggestComponent';
import PostItem from './Instagram/component/post/postItem';
function App() {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='flex h-screen flex-col md:flex-row font-sans'>
          {/* Navbar PC */}
          <SideBarComponent type={'pc'} />
          {/* Nội dung */}
          <div class="flex w-full p-6">
            {/* Nội dung bên trái */}
            <div className='flex-[65] ml-20'>
              {/* Nội dụng bên trái trên */}
              <div className='h-[100px] w-[630px] mb-4'>
                <ListFriend />
              </div>
              {/* Nội dung bên trái dưới*/}
              <div className='h-full w-[630px] bg-black'>
                <PostItem />
              </div>
            </div>

            {/* Nội dung bên phải */}
            <div className='flex-[35] h-screen'>
              <SuggestComponent />
            </div>
          </div>
          {/* Suggested for you*/}
          {/* Navbar Mobile */}
          <SideBarComponent type={'mobile'} />
        </div>

      </div>
    </>

  );
}
export default App;
