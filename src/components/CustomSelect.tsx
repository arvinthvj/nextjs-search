import React, {useState} from 'react';

const CustomSelect= (props:any) => {
    const {options,changedValue,currentValue} = props;
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label htmlFor="select" className="block text-gray-700 font-bold mb-2">
        Select an option:
      </label>
      <select
        value={currentValue}
        onChange={(e:any)=>{
            changedValue(e.target.value);
        }}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        {(options || []).map((e:any)=>{
            return <option value={e}>{e}</option>
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
