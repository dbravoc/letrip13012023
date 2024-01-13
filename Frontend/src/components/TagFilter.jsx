import React from 'react';

const TagFilter = ({ tags, setTags, filterExperiences }) => {
  const toggleTag = (tag) => {
    const newTags = {...tags,[tag]: !tags[tag]};
    setTags(newTags);
    filterExperiences(newTags); // Asegúrate de que esta función se esté llamando correctamente
  };

  return (
    <div>
      {Object.keys(tags).map(tag => (
        <button
          key={tag}
          className={`${
            tags[tag]
              ? 'bg-green-200 text-green-700 ring-green-600/20'
              : 'bg-gray-50 text-gray-700 ring-gray-600/2'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2 m-1 transition-all ease-in-out duration-300`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
