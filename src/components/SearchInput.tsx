import React, { useState } from 'react';

const SearchInput = (props:any) => {
   
    const {data, searchTerm, searchTermChange, selectedCardChange} = props;
    
    const filteredResults=(receivedData :any)=>{
        if(receivedData.length && searchTerm.length){
            return receivedData.filter((e:any)=>{
                return e.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            });
        }else{
            return []
        }
        
    };
    
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e)=>{
            if(!e.target.value.length){
                selectedCardChange([])
            }
            searchTermChange(e.target.value)
        }}
      />
      <div className="mt-4">
        {filteredResults(data).length > 0 ? (
          <ul className="border p-2 rounded-md">
            {filteredResults(data).map((item:any) => (
              <li  className="hover:bg-gray-100 p-2" onClick={()=>{
                selectedCardChange([item]);
                searchTermChange("")
              }}>
                {item.name}
              </li>
            ))}
          </ul>
        ) : searchTerm.length ? (
          <p className="text-gray-500">No results found.</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchInput;
