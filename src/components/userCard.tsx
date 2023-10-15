import React from 'react';

const UserCard = (props:any) => {
    const {user} = props;
  return (
    <div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-32 object-cover" src={`https://via.placeholder.com/300?text=${user.name}`} alt={user.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">Username: {user.username}</p>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">Phone: {user.phone}</p>
        <p className="text-gray-700 text-base">Website: {user.website}</p>
        <p className="text-gray-700 text-base">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p className="text-gray-700 text-base">Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
