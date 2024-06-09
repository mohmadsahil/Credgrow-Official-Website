import React from 'react'
import "./SummerContest.css"

export const SummerContest = () => {
  return (
    <>
        <div className='summerContestMainDiv'>
            <div className='mainSummerContest'>
                <a href="https://cc-aubank.credgrow.in/"><img className='SummerContestImg' src="Images/Summer Contest banner.png" alt="" /></a>
            </div>

            <div className='summerContestText'>
                <h1 className='mainContestText' >Welcome to the Credgrow Summer Contest!</h1>
                <h1 className='mainContestText2' >Stand a chance to win a brand new laptop for your work and entertainment! Just follow these simple steps to seize this opportunity</h1>
            </div>
            <div className='ContestTextStep'>
                <h1 className='mainContestTextStep' >Step 1: Use this link to apply for a XXXXX 'AU Bank Credit Card' . <a href="https://credgrow.in/">credgrow.in</a></h1>
                <h1 className='mainContestTextStep' >Step 2: Share about this exciting contest on your social media profiles, including Facebook, Twitter, LinkedIn, and Instagram.</h1>
                <h1 className='mainContestTextStep' >Step 3: Hold your breath until June 20, 2024, and watch our website for the announcement of the lucky winner's name.</h1>
            </div>
        </div>
    </>
  )
}
