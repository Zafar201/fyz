import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { checkProperty } from '../actions/generalAction';


function SearchScreen() {
    const params = useParams();
    const dispatch = useDispatch()
    const checkPropertys= useSelector(state=>state.checkPropertys)
    const {loading, error, prop}= checkPropertys
     const { adult,child,location,startingDate,endingDate } = params;
     console.log(adult,child,location);
     useEffect(()=>{
        dispatch(checkProperty(location,adult,child,startingDate,endingDate))
            if(!loading && !error){
              console.log(prop[0],'pop');
            }
            

      
     },[])
    
  return (
    <div>
        SearchScreen
        
        </div>
  )
}

export default SearchScreen