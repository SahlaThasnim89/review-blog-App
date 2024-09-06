import React, { useState } from 'react'
import { UserData } from '../../StaticData/UserData.js'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
UserData

function Review() {
    const [index,setIndex]=useState(0)
    const {name,job,image,text}=UserData[index]

    const checkNumber=(number)=>{
        if(number>UserData.length-1){
            return 0;
        }
        if(number<0){
            return UserData.length-1
        }
        return number;
    }

    const nextPerson=()=>{
        setIndex((index)=>{
            let newIndex=index+1
            return checkNumber(newIndex)
        })
    }

    const prevPerson=()=>{
        setIndex((index)=>{
            let newIndex=index-1
            return checkNumber(newIndex)
        })
    }

    const randomPerson=()=>{
        let randomNumber=Math.floor(Math.random()*UserData.length)
        if(randomNumber===index){
            randomNumber=index+1
        }
        setIndex(checkNumber(randomNumber))
    }

  return (
    <div>
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt="" className='person-img' />
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>Surprice me</button>
        </article>
    </div>
  )
}

export default Review