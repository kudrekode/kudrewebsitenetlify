import React from 'react';
import { Link } from 'react-router-dom';
import RainAnimation from '../background/RainAnimation';
import './Home.css';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {

    const musicItems = [
        {
          image: 'assets/policestatevinyl.png',
          title: 'Johnny No Mates Army (Police State)',
          description: 'Check out our latest single Johnny No Mates Army (Police State)',
          link: 'https://distrokid.com/hyperfollow/kudre/johnny-no-mates-army-police-state'
        },
        {
            image: 'assets/vinylmydesign.png',
            title: 'My Design',
            // Description with a link at the end
            description: `Kudre presents "a dynamic trend where technic and body blend together 
              thanks to a good glue made of refined sounds well adapted to the musical 
              context that embellish the listening. 'My Design' lays the foundations on really spot on metrics and riffs."`,
            link: 'https://distrokid.com/hyperfollow/kudre/my-design',
            articleLink: 'https://www.metalmusic.uk/kudre-my-design/' // Added article link
          },
          {
            image: 'assets/pinkfull.png',
            title: 'Pink',
            description: `Kudre's latest single "Pink" reflects on the themes of 
              mistakes and accountability. Hailing from Southeast London, Kudre channels 
              influences like Nirvana and Red Hot Chili Peppers. The song opens with 
              "I've got a rhythm/But the rhythm don't play," capturing the struggle of 
              finding one's groove amidst life's challenges. With powerful vocals, 
              energetic guitar, and dramatic bass, "Pink" is an anthem of frustration 
              and resilience. Kudre aims to "bring meaning back into rock music," 
              delivering a raw, authentic experience reminiscent of live performances.`,
            link: 'https://open.spotify.com/track/5PfBap4t2yRbOxWOMqTPSQ',
            articleLink: 'https://iamur.one/kudre-pink/'
          }
      ];
    
      const galleryItems = [
        {
          image: '/assets/bandpic.jpg',
          alt: 'Band Photo'
        },
        {
          image: '/assets/twopalmsaudience.jpg',
          alt: 'Two Palms Show'
        },
        {
          image: '/assets/spotifycover3.png',
          alt: 'Kudre Spotify Cover'
        },
        {
          image: '/assets/jacksonandjames.jpg',
          alt: 'Two Palms Show'
        },
        {
          image: '/assets/will.jpg',
          alt: 'Will Two Palms'
        },
      ];

      
  return (
    <div className="home-page">
      <RainAnimation />
      
      <div className="social-links">
        <a href="https://www.instagram.com/kudreofficial/" target="_blank" rel="noopener noreferrer" className="social-icon slideIn">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/KudreOfficial/" target="_blank" rel="noopener noreferrer" className="social-icon slideIn">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/@jameskudrecrick" target="_blank" rel="noopener noreferrer" className="social-icon slideIn">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://www.youtube.com/@kudreofficial" target="_blank" rel="noopener noreferrer" className="social-icon slideIn">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      <h1 id="title" className="fadeIn">KUDRE</h1>

      {/* <div className="header_logo">
        <img src="src/assets/logoheader.png" alt="Kudre Logo"></img>
        <div className="shimmer"></div>
    </div> */}


      <div className="content">
        <div className="box-1">
          <a href="https://linktr.ee/kudreofficial" target="_blank" rel="noopener noreferrer" className="btn btn-one slideIn">
            <span>MUSIC</span>
          </a>
        </div>

        <div className="box-1">
          <Link to="/shows" className="btn btn-one slideIn">
            <span>SHOWS</span>
          </Link>
        </div>

        <div className="box-1">
        <Link to="/contact" className="btn btn-one slideIn">
        <span>CONTACT</span>
        </Link>
        </div>
      </div>

      <div className="bio">
        <p>
        Kudre is a three-piece alt-rock band from Southeast
        London, channeling raw energy and unfiltered emotion
        into their music.

        Their sound has been described as “a dynamic
        trend where technique and body blend together”
        (Ghost Record Label) and as music that “hooks
        you in with a catchy chorus but reveals so much
        more with each listen” (Girl at the Rock Shows).
        From the anthemic frustration of “Pink” to the
        unrelenting power of “My Design,” Kudre crafts
        songs that are raw, authentic, and drenched in meaning.
        </p>
      </div>

      <div className="embedded-video">
        <iframe
          src="https://www.youtube.com/embed/WzhgJ2M6JGI"
          title="Kudre Music Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <Carousel 
            items={musicItems} 
            className="music-carousel" 
            header="Music Showcase" // Optional header
            />     

            <br></br>

        <Carousel 
            items={galleryItems} 
            className="images-carousel" 
            header="Photo Gallery" // Optional header
            />             

<br></br>
<br></br>
<br></br>


    </div>
  );
};

export default Home;