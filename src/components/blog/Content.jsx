import React from 'react';

function Content({ title, content, author }) {
  return (
    <main className="mb-6">
      <h1 className="text-3xl font-semibold mb-2 text-gray-800">{title}</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
      <p className="text-sm text-gray-500 mb-1">
        <strong className="font-semibold text-gray-700">Author:</strong> {author}
      </p>
    </main>
  );
}

export default Content;
