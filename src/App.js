import { CreatePost } from "./components/CreatePost";
import { GreetMessage } from "./components/GreetMessage";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-secondaryTextColor mb-12">
      <header>
        <h1 className='mt-16 font-medium text-[28px] text-primaryTextColor'>Mini Forum App</h1>
      </header>
      <div className="w-full max-w-screen-md flex flex-col gap-2">
        <GreetMessage />
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}

export default App;
