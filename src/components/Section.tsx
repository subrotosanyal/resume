import React from 'react';

const Section = ({ title, icon, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;