import { useEffect, useState } from 'react';
import { PostPreview, Loader } from './components';
import api from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    api.fetchPosts().then((res) => {
      setLoader(false);
      setPosts(res);
    });
  }, []);

  return (
    <div className="p-strip">
      <div className="row">
        {loader ? (
          <Loader />
        ) : (
          posts.map((p) => <PostPreview post={p} key={p.id} />)
        )}
      </div>
    </div>
  );
}

export default App;
