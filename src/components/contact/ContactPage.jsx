import React, { useState } from 'react';

function ContactPage() {
  const formClass = 'border border-gray-300 rounded p-2';
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (formInput.name.length < 5) {
      console.error('Name should be min length of 5 characters');
      return;
    }
    console.log(formInput);
  };
  return (
    <div className="p-4">
      <form className="flex flex-col gap-2" onSubmit={submitForm}>
        <input
          minLength={5}
          placeholder="Name"
          className={formClass}
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className={formClass}
          value={formInput.email}
          onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className={formClass}
          value={formInput.message}
          onChange={(e) => setFormInput({ ...formInput, message: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-800 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
