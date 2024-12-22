import { useEffect, useState } from 'react'

import './App.css'
import Table from './components/Table/Table'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const recordsPerPage = 5;



  useEffect(()=>{
 
      const fetchData= async ()=>{
        try{
          const response = await fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json");
        
         if(!response.ok){
          throw new Error("Failed to fetch data")
         }
         const data = await response.json();
        if(data.length===0){
          throw new Error("No project found")
        }
          setData(data)
          setCurrentPage(1);
        }
        catch(err){
          setError(err.message)
        } finally{
          setLoading(false)
        }
        
      }
    
    fetchData()
  },[])

  const totalPages = Math.ceil(data.length / recordsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  if (loading) return("Loading");
  if (error) return <div className="error">Error: {error}</div>;
  
  return (
    <>
     <div className="app-container">
      <h1>Table Data</h1>
      {data.length > 0 ? (
        <>
          <Table data={paginatedData} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="no-data">No projects to display.</div>
      )}
    </div>
  
    </>
  )
}

export default App
