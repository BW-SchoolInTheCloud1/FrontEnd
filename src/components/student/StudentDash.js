import React, { useState, useEffect } from "react"
import { BackgroundDiv } from "../../Styles/styles"
import { useDispatch, useSelector } from "react-redux"
import { getSeniors } from "../../redux/actions"
import SeniorList from "../senior/SeniorList"
import SeniorCard from "../senior/SeniorCard"
import DashNavBar from '../navs/DashNavBar'

const StudentDash = () => {
   const seniors = useSelector(state => state.seniors)
   const isFetching = useSelector(state => state.isFetching)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState(seniors)
	
   useEffect(() => {
      dispatch(getSeniors())
      const results = seniors.filter(character => {
         return (
            character.country
               .toLowerCase()
               .includes(searchTerm.toLowerCase()) ||
            character.availability
               .toLowerCase()
               .includes(searchTerm.toLowerCase())
         )
      })
      setSearchResults(results)
	}, [searchTerm])
	
   const handleChange = e => {
      setSearchTerm(e.target.value)
	}
	
   const handleSubmit = e => {
      e.preventDefault()
	}
	
   return (
      <div>
      <DashNavBar />   
      <BackgroundDiv>
         <form onSubmit={handleSubmit}>
            <input
               type='search'
               name='search'
               value={searchTerm}
               onChange={handleChange}
            />
            <button>Search</button>
         </form>
         <div>
            {searchTerm.length === 0 ? (
               <div>
                  <SeniorList />
               </div>
            ) : (
               <div>
                  {searchResults.map(sr => {
                     return (
                        <SeniorCard
                           location={sr.country}
                           times={sr.availaility}
                        />
                     )
                  })}
               </div>
            )}
         </div>
         {/* <Button onClick={() => dispatch(getSeniors())}>Show all seniors</Button> */}
      </BackgroundDiv>
      </div>
   )
}

export default StudentDash
