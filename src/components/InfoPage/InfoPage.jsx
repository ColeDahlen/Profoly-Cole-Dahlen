import React from 'react';


function InfoPage() {
  return (
    <div>
      <h3>Technologies Used:</h3>
      <ul className='technology'>
        <li>React</li>
        <li>Redux</li>
        <li>Sagas</li>
        <li>Node</li>
        <li>Express</li>
        <li>Bootstrap</li>
        <li>Postgres</li>
        <li>Postico 2</li>
      </ul>
      <h3>Toughest Challenge I overcame:</h3>
      <div>The toughest challenge I overcame was creating the forum page, and being able to store and render the comments under the right post.</div>
      <h3>What Im Excited To Add:</h3>
      <div>What im really excited to add to this project is file storage with AWS S3</div>
      <h3>Thanks!</h3>
      <div>Thank you to my family for supporting me through prime!</div>
      <div>Thank you to my cohort mates for helping me throughout the prime program!</div>
      <div>A big thank you to Prime Staff for being very understanding, and helpful during this process!</div>
    </div>
  );
}

export default InfoPage;
