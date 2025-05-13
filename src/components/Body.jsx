import React, { useEffect, useState } from 'react'

function Body() {
  const [data, setData] = useState([])

  async function fetchData() {
    const response = await fetch("/api/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
    const result = await response.json()
    console.log(result?.data?.cards)
    setData(result?.data?.cards || [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full'>
      <div className='w-[75%] mx-auto'>
        Body
      </div>
    </div>
  )
}

export default Body
