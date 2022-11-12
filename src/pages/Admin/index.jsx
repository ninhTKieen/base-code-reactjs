import React from 'react';
import {Helmet} from 'react-helmet';

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin | One Stop Service</title>
      </Helmet>

      <div>
        <h1 className="text-3xl font-bold stroke-slate-600 text-pink-700">The Admin Page</h1>
      </div>
    </>
  );
};

export default AdminPage;
