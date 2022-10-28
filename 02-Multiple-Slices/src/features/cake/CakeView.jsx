import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {ordered, restocked } from "./cakeSlice"


export const CakeView = () => {
    const dispatch = useDispatch()
    const cakes = useSelector(state => state.cake.numOfCakes)
    const icecreams = useSelector(state => state.icecream.numOfIcecreams)
    
  return (
    <div>
      <h1>Cakes: {cakes} </h1>
      {icecreams>0 &&  <p>Free icecream with your cake</p> }
      
      <div className="card">
        
        <button 
          onClick={() => dispatch(ordered())}
          disabled={ cakes===0? true : false}
          >
          {cakes===0? "No more cakes": "Order a Cake"}
        </button>

        <button 
          onClick={() => dispatch(restocked(10))}
          disabled={ cakes===0? false : true}
        >
          Restock cakes
        </button>

      </div>
    </div>
  )
}