import UserCard from '@/components/userCard';
import React from 'react';
// import '../app/global.css'
function Home(props :any) {

  const {data} =  props;



  return (
    <div className="flex flex-wrap justify-center">
      {data.map((user:any, index:any) => (
        <div key={user.id} className={`w-1/3 ${index % 3 !== 2 ? 'pr-4' : ''}`}>
          <UserCard user={user} />
        </div>
      ))}


<div className="w-64 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-32 object-cover" src={``} alt={''} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">Username: </p>
        <p className="text-gray-700 text-base">Email: </p>
        <p className="text-gray-700 text-base">Phone: </p>
        <p className="text-gray-700 text-base">Website: </p>
        <p className="text-gray-700 text-base">Address: </p>
        <p className="text-gray-700 text-base">Company: </p>
      </div>
    </div>
    </div>
  );
}

export default Home;


export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  return { props: { data } }
}
