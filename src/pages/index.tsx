import UserCard from '@/components/userCard';
import React from 'react';
import "../../src/global.css"
import {useState, useEffect} from 'react';
import SearchInput from '@/components/SearchInput';
import { Pagination } from 'antd';
import CustomSelect from '@/components/CustomSelect';
function Home(props :any) {
  
  const {data} =  props;
  const [current, setCurrent] = useState(1);
  const [pageLimit, setPageLimit] = useState(3);
  const [ searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(data||[]);
  const [selectedCard , setSelectedCard] = useState([]);
  
  const [selectedSortOrder, setSelectedSortOrder] = useState("")
  const onChange:any = (page:any) => {
    setCurrent(page);
  };
  function sortArray(array:any, sortOrder:any) {
    return array.slice().sort((a:any, b:any) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      if (sortOrder === 'Asc') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else if (sortOrder === 'Desc') {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }
  
      return 0;
    });
  }
  useEffect(()=>{
    let sorted = sortArray(filteredResults.slice(), selectedSortOrder);
    setFilteredResults(sorted);
  },[selectedSortOrder])
  useEffect(()=>{
    if(selectedCard.length){
      setFilteredResults(selectedCard)
    }else{
      setFilteredResults(data)
    }
  },[selectedCard]);

  return (
    <div>
      <div>
        <SearchInput data={data || []} setfiltered={setFilteredResults} searchTermChange={setSearchTerm} searchTerm={searchTerm} selectedCardChange={setSelectedCard}/>
        <CustomSelect options={["Select sort order","Asc", "Desc"]} currentValue={selectedSortOrder} changedValue={setSelectedSortOrder}/>
      </div>
      <div className="flex flex-wrap justify-center">
      {filteredResults.slice().splice((current*pageLimit)-pageLimit,pageLimit).map((user:any, index:any) => {
        return <div key={user.id} >
          <UserCard user={user} />
        </div>

      })}
      
    </div>
      <Pagination current={current} onChange={onChange} total={filteredResults.length} pageSize={pageLimit}/>
    </div>
  );
}

export default Home;


export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  return { props: { data } }
}
