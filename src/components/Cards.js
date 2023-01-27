import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These Upcoming Books!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.rd.com/wp-content/uploads/2020/04/the-other-wes-moore-book-via-amazon.com-ecomm.jpg?fit=768,768'
              text='This 2023 will be best seller follows the story of two young men growing up in the same area of Baltimore who have the same name but whose lives follow hugely divergent paths. '
              label='Adventure Stories'
              path='/services'
            />
            <CardItem
              src='https://www.rd.com/wp-content/uploads/2020/04/mindhunter-book-via-amazon.com-ecomm.jpg?fit=700,700'
              text='Throughout his decades-long career as a member of the FBI’s serial crime unit, John Douglas interviewed such notorious criminals as John Wayne Gacy and Charles Manson. In fact, the Jack Crawford character in the Hannibal Lector novels is based on him.'
              label='Crime Novels'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781506282886/mcat-behavioral-sciences-review-2023-2024-9781506282886_hr.jpg'
              text='Kaplan’s MCAT Behavioral Sciences Review 2023–2024 offers an expert study plan, detailed subject review, and hundreds of online and in-book practice questions—all authored by the experts behind the MCAT prep course that has helped more people get into medical school than all other major courses combined.'
              label='Academic Books'
              path='/services'
            />
            <CardItem
              src='https://m.media-amazon.com/images/I/51QlSdNLKQL._SL500_.jpg'
              text='Powerhouse adult fantasy author R. A. Salvatore and Erika Lewis deliver a sweeping, action-packed, romantic pre-Arthurian tale of the origins of magic (and Merlin), perfect for fans of Falling Kingdoms and Seraphina.'
              label='Fantasy'
              path='/products'
            />
            <CardItem
              src='https://imageio.forbes.com/blogs-images/quickerbettertech/files/2019/06/Caesar_and_Christ-1200x1800-1-1200x1186.jpg?format=jpg&width=960'
              text='Roman civilization arguably represents the highest (and the lowest) of human achievements.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;