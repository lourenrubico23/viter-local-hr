import React from 'react'
import IconNoData from '../svg/IconNoData'

const NoData = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <span className="text-5xl text-gray-400">
          <IconNoData />
        </span>
        <span className="font-bold text-gray-300 text-[16px]">No Data Found</span>
      </div>
    </>
  )
}

export default NoData
