import { useState } from 'react'
import { posts } from '../src/data/posts.js'
import PostContainer from './components/PostContainer/PostContainer.jsx';
import { Context } from './contex.js';
import AddPost from './components/AddPost/AddPost.jsx';

function App() {

  const [cardsPosts, setCardsPosts] = useState(posts);

  const switch_like = id => {
    const target_post = cardsPosts.find(el => el.id === id);
    target_post.like = !target_post.like;
    setCardsPosts([...cardsPosts]);
  }


  const addPostCard = (post) => {
    const newState = [...cardsPosts, post];
    setCardsPosts(newState)
    console.log(newState);
  }

  
  const delete_post = id => setCardsPosts(cardsPosts.filter(el => el.id !== id));


  return (
    <div className="App">
      <AddPost addPostCard={addPostCard}/>
      <Context.Provider value={{cardsPosts, switch_like, delete_post}}>
        <PostContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;
