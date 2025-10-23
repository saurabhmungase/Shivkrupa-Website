import React from 'react';

const SectionHeader = ({ subtitle, title, highlight }) => {
  const highlightedTitle = title.replace(highlight, `<span class="text-red-600">${highlight}</span>`);

  return (
    <div className="text-center mb-16">
      <span className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3">
        {subtitle}
      </span>
      <h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
      <div className="mx-auto h-1 w-20 bg-red-600"></div>
    </div>
  );
};

export default SectionHeader;