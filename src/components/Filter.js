import React from 'react'
import { filterData } from '../data'

export const Filter = ({filterData}) => {
  return (
    <div className='flex justify-center mx-auto space-x-4 text-white justflex-wrap gap-y-4 max-w-max x 11/12 w-text-center'>
        {filterData.map((data)=>{
          return(<button className='px-2 py-1 text-lg text-white transition-all duration-300 bg-black border-2 rounded-md hover:text-black hover:bg-opacity-50' key={data.id}>
            {data.title}
          </button>)
        } )}
    </div>
  )
}
