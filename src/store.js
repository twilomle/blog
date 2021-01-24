import React, { useState } from 'react';

const posts = [];

export const Context = React.createContext();

export const Store = ({ children }) => {
  const [globalPosts, setGlobalPosts] = useState(posts);

  return (
    <Context.Provider value={[globalPosts, setGlobalPosts]}>
      {children}
    </Context.Provider>
  );
};
