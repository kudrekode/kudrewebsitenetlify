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

                <a href={"https://link.dice.fm/a9921a0162aa"}>
                    <img src="assets/temp-images/1.png" alt="Jag Shoes 15th Aug" className="gigs-images"></img>
                </a>
                <p>Jaguar Shoes: Headline Show</p>
                <p>Jaguar Shoes - 15th August</p>

                {/*<a href={"https://dice.fm/event/53nkek-junk-mail-diezelbud-kudre-matty-grainger-18th-jul-the-victoria-london-tickets?lng=en"}>*/}
                {/*    <img src="assets/temp-images/thevic.png" alt="The Victoria 18th July" className="gigs-images"></img>*/}
                {/*</a>*/}
                {/*<p>The Victoria: Junk Mail, Diezelbud, Kudre</p>*/}
                {/*<p>The Victoria 18th July</p>*/}

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