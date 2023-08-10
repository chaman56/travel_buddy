import React from 'react'
import { useParams } from 'react-router-dom';

const ExplorePage = () => {
  const {id} = useParams();
  return (
    <div>ExplorePage {id}</div>
  )
}

export default ExplorePage;