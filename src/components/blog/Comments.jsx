import React, { useEffect, useRef, useState } from 'react';
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios';

function Comments() {
  const params = useParams();
  console.log(params.post_id);

  const [comment, setComment] = useState({
    name: '',
    content: '',
  });

  const [commentList, setCommentList] = useState([]);

  // const addComment = (comment) => {
  //   setCommentList([...commentList, comment]);
  // };

  const textboxRef = useRef();

  const postComment = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
        name: comment.name,
        body: comment.content,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">Comments</h2>
      <input
        value={comment.name}
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-lg focus:outline-none p-3 mb-2 focus:ring-2 focus:ring-blue-400 resize-none"
      />
      <textarea
        ref={textboxRef}
        value={comment.content}
        onChange={(e) => setComment({ ...comment, content: e.target.value })}
        placeholder="Add a comment"
        className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-[80px]"
      />
      <button
        onClick={postComment}
        type="submit"
        className="bg-amber-400 px-6 py-2 rounded-2xl text-white hover:bg-amber-600 transition font-semibold mb-6"
      >
        Submit
      </button>
      {commentList.length === 0 ? (
        <p className="text-center text-gray-600">There are no comments to display</p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Existing Comments:</h3>
          <ul className="space-y-2 pl-4 list-disc text-gray-600">
            {commentList.map((value, index) => (
              <IndividualComment value={value} />
            ))}
          </ul>
        </div>
      )}

      <br />
    </div>
  );
}

export default Comments;
