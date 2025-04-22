import React from 'react';
import RainAnimation from '../background/RainAnimation';
import BackButton from '../components/BackButton';

import './Shows.css';

const Shows: React.FC = () => {
  return (
    <div className="shows-page">
      <RainAnimation />
      <BackButton />

      <div className="content-shows">
        <h1>UPCOMING SHOWS</h1>
        <div className="shows-container">
            <div className="show-list">
                <h3>Upcoming Shows TBC</h3>
                {/*<h3>15th March</h3>*/}
                {/*<a href={"https://link.dice.fm/Z2c56552e461"}>The Finsbury - The Amber Bugs Launch Party</a>*/}
                {/*/!*<p>Free Show</p>*!/*/}
                {/*<a href={"https://link.dice.fm/Z2c56552e461"}>*/}
                {/*    <img src="assets/amberbugs.png" alt="Amber Bugs Release Party" className="gigs-images"></img>*/}
                {/*</a>*/}
                {/*<h3>20th March</h3>*/}
                {/*<a href={"https://skiddle.com/e/40647411/?skcampaign=Kudre"}>The Engine Rooms - Headline Show</a>*/}
                {/*<a href={"https://skiddle.com/e/40647411/?skcampaign=Kudre"}>*/}
                {/*    <img src="assets/enginerooms.png" alt="Amber Bugs Release Party" className="gigs-images"></img>*/}
                {/*</a>*/}

            </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;