import React from 'react'
import { useSearchParams } from "react";
import { useParams } from 'react-router-dom';


const PackagePage = () => {
  const {id} = useParams();

  return (
    <div>
      PackagePage {id}
    </div>
  )
}

export default PackagePage