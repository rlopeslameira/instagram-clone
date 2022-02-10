import { useEffect, useState } from 'react';

import './styles/global.css';

import logo from './assets/logo.png';
import Post from './Post/index'

import {db} from './firebase';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  },[])

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-header-img" alt="Instagram Logo"/>
        {posts.map(({id, post}) => (
          <Post key={id} username={post.username} imageUrl={post.imageUrl} caption={post.caption}/>
        ))}
      </div>
    </div>
  );
}

export default App;
