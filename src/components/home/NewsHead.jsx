import React from 'react'
import news from "../../assets/images/new.gif"

const NewsHead = () => {
  return (
    <>
    <div className='news-head bg-yellow-100 flex flex-row h-20 p-2 font-bold'>
        <ul className='flex flex-wrap p-2 m-2 justify-center'>
            <li className='mx-3 '>
                <a href="" className='flex flex-row'>Ability Enhancement Courses and Skill Enhancement Courses
                    <img src={news} alt="" />
                    </a></li>
            <li className='mx-3'>
                <a href="">SAMARTH Examination Form Filling Process
                <img src={news} alt="" /></a></li>
            <li className='mx-3'>
                <a href="">Admission (2024-2025)
                <img src={news} alt="" /></a></li>
            <li className='mx-3'>
                <a href="">Hostel Registration
                <img src={news} alt="" /></a></li>
            <li><a href="">Study in India
            <img src={news} alt="" /></a></li>
        </ul>
    </div>
    </>
  )
}

export default NewsHead