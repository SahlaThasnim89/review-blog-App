import React from 'react'
import Review from '../Review/Review'

function Home() {
  return (
    <div>
        <main>
            <section className='container'>
                <div className="title">
                    <h2>Review Blog App</h2>
                    <div className='underline'></div>
                    <Review/>

                </div>
            </section>
        </main>
    </div>
  )
}

export default Home