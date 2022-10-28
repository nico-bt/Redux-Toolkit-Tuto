import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'


export const IcecreamView = () => {
    const icecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

  return (
    <div>
        <h1> Icecreams: {icecreams}</h1>
        <div className='card'>
            <button 
                onClick={()=> dispatch(ordered())}
                disabled={icecreams===0? true : false}
            >
                {icecreams===0? "No more icecreams" : "Order an icecream"}
            </button>
            
            <button 
                onClick={()=> dispatch(restocked(15))}
                disabled={icecreams===0? false : true}
            >
                Restock
            </button>

        </div>
    </div>
  )
}
