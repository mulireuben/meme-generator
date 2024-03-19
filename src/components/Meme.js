import React from 'react';
import Mydata from '../Mydata';

const Meme = () => {
  function getMemeImage() {
    const memesArray = Mydata.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    
      <div className='form'>
        <label htmlFor='top text'>
          <div>
            <input
              type='text'
              placeholder='shut up'
              id='top text'
              className='form--input'
            />
          </div>
        </label>
        <label htmlFor='bottom text'>
          <div>
            <input
              id='bottom text'
              type='text'
              placeholder='and take my money'
              className='form--input'
            />
          </div>
        </label>
        <button className='form--button' onClick={getMemeImage}>
          Get a new image
        </button>
      </div>
    
  );
};

export default Meme;
