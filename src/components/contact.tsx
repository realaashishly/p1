import React from 'react';

export default function Contact() {
  return (
    <div className="my-24 px-4 py-12  text-white rounded-lg max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 text-center">
        Looking to start a project or need consultation? Feel free to contact me.
      </h3>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg">Uttar Pradesh, India</p>
        <a
          href="mailto:aashishsingh.aec@gmail.com"
          className="text-lg text-yellow hover:underline"
        >
          aashishsingh.aec@gmail.com
        </a>
      </div>
    </div>
  );
}
