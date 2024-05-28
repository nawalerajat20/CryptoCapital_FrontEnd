import React from 'react';

const Feedback = () => {
  return (
    <div>
        <div className='FeedHead'>
            Give Feedback
        </div>
        <div className='feedback'>
            <div className='que'>
                What do you think of using the Cryptocurrency?
            </div>
            <div className='emojis'>
                🥲 😒 😣 😁 😀
            </div>
            <div className='que'>
                Do you have anu thoughts would you like to share?
                <textarea name="feedback" id="" cols="100" rows="10" placeholder='Enter your Text'></textarea>
            </div>
            <div className='but'>
                <button className='button1'>Send</button>
                <button className='button2'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Feedback