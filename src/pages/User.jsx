import React from 'react';
import { useLoaderData } from 'react-router-dom'
const User = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
        {data ? data.login : "hello"}
        </div>
    );
};

export default User;