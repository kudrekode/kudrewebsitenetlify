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
                {/*<h3>Upcoming Shows TBC</h3>*/}

                {/*<h4>9th June</h4>*/}

                <a href={"https://gotobeat.com/gig/diezelbud-and-finches-live-at-strongroom-bar--iR"}>
                    <img src="assets/temp-images/diezel.jpeg" alt="Strongroom 12th June" className="gigs-images"></img>
                </a>
                <p>Diezelbud: Supporting Show</p>
                <p>Strongroom 12th June</p>

                <a href={"https://dice.fm/event/53nkek-junk-mail-diezelbud-kudre-matty-grainger-18th-jul-the-victoria-london-tickets?lng=en"}>
                    <img src="assets/temp-images/thevic.png" alt="The Victoria 18th July" className="gigs-images"></img>
                </a>
                <p>The Victoria: Junk Mail, Diezelbud, Kudre</p>
                <p>The Victoria 18th July</p>

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