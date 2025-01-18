import UserProfile from './pages/userProfile';
import Search from './pages/search';
import TweetComponent from './pages/tweet';
function App() {
  // function createContentForScroll() {
  //   const body = document.body;

  //   // Tạo một số lượng phần tử để làm trang dài hơn
  //   for (let i = 0; i < 50; i++) {
  //     const div = document.createElement('div');
  //     div.style.height = '100px'; // Mỗi phần tử có chiều cao 100px
  //     div.style.backgroundColor = i % 2 === 0 ? '#f0f0f0' : '#e0e0e0'; // Đổi màu nền mỗi phần tử
  //     div.style.marginBottom = '10px'; // Tạo khoảng cách giữa các phần tử
  //     div.textContent = `Element ${i + 1}`;
  //     div.style.padding = '20px';
  //     div.style.fontSize = '18px';
  //     body.appendChild(div);
  //   }

  //   document.documentElement.style.height = 'auto';
  // }
  // createContentForScroll();
  return (
    <>
      <div className='bg-slate-500 w-screen h-screen justify-center items-center flex'>
        <TweetComponent />
      </div>
    </>

  );
}

export default App;
