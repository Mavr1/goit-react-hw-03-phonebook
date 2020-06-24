import React from 'react';

const Section = ({ name, children }) => (
  <section>
    {name && <h2>{name}</h2>}
    {children}
  </section>
);

export default Section;
