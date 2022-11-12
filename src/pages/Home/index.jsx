//Home Page component
import React from 'react';

import {Helmet} from 'react-helmet';
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | One Stop Service</title>
      </Helmet>

      <div>
        <h1 className="text-3xl font-bold stroke-slate-600 text-cyan-800">The Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
