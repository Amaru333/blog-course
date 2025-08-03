import { useParams } from 'react-router';
import Comments from './Comments';
import Content from './Content';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPost() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState();
  const [authorData, setAuthorData] = useState();

  console.log(postData, authorData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
        );
        setPostData(postRes.data);

        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Content title={postData.title} content={postData.body} author={authorData.name} />
          <Comments />
        </>
      )}
    </div>
  );
}

export default BlogPost;
