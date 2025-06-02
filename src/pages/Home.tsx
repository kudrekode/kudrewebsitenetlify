import React from 'react';
import { Link } from 'react-router-dom';
import RainAnimation from '../background/RainAnimation';
import './Home.css';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {

    const musicItems = [
        {
          image: 'assets/music-covers/slvinyl.png',
          title: 'Strawberry Lace',
          description: 'Strawberry Lace is out now!',
          link: 'https://open.spotify.com/track/2hl9RVkwpTpI7eZaHkSKlA'
        },
        {
            image: 'assets/music-covers/vinylmydesign.png',
            title: 'My Design',
            description: `Kudre presents "a dynamic trend where technic and body blend together 
              thanks to a good glue made of refined sounds well adapted to the musical 
              context that embellish the listening. 'My Design' lays the foundations on really spot on metrics and riffs."`,
            link: 'https://distrokid.com/hyperfollow/kudre/my-design',
            articleLink: 'https://www.metalmusic.uk/kudre-my-design/' // Added article link
          },
          {
            image: 'assets/music-covers/pinkfull.png',
            title: 'Pink',
            description: `"Pink" reflects on the themes of 
              mistakes and accountability. With powerful vocals, 
              energetic guitar, and dramatic bass, "Pink" is an anthem of frustration 
              and resilience. Kudre aims to "bring meaning back into rock music," 
              delivering a raw, authentic experience reminiscent of live performances.`,
            link: 'https://open.spotify.com/track/5PfBap4t2yRbOxWOMqTPSQ',
            articleLink: 'https://iamur.one/kudre-pink/'
          }
      ];
    
      const galleryItems = [
        {
          image: '/assets/band-images/bandpicedit.jpg',
          alt: 'Band Photo'
        },
        {
          image: '/assets/band-images/twopalmsaudience.jpg',
          alt: 'Two Palms Show'
        },
        {
          image: '/assets/band-images/spotifycover3.png',
          alt: 'Kudre Spotify Cover'
        },
        {
          image: '/assets/band-images/jacksonandjames.jpg',
          alt: 'Two Palms Show'
        },
        {
          image: '/assets/band-images/will.jpg',
          alt: 'Will Two Palms'
        },
          {
          image: '/assets/band-images/jackson_james_rehearse.JPG',
          alt: 'New Cross Rehearsals'
          },
      ];

      
  return (
      <div className="home-page">
        <RainAnimation/>


        {/*<h1 id="title" className="fadeIn">KUDRE</h1>*/}

        <div className="header_logo">
          <img src="assets/band-misc/header2.png" alt="Kudre Logo"></img>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/kudreofficial/" target="_blank" rel="noopener noreferrer"
             className="social-icon slideIn">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/KudreOfficial/" target="_blank" rel="noopener noreferrer"
             className="social-icon slideIn">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/@jameskudrecrick" target="_blank" rel="noopener noreferrer"
             className="social-icon slideIn">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@kudreofficial" target="_blank" rel="noopener noreferrer"
             className="social-icon slideIn">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="content">

          <div className="box-1">
            <Link to="/music" className="btn btn-one slideIn">
              <span>MUSIC</span>
            </Link>
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
            Will works in a pub. Jackson works
            in an office. James retrofits stainless
            steel woks with fucking lasers. Joe. One of
            these is a lie. Together, it is a truth.
            Kudre is southeast London's hottest new boy band.
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
            // header="Music Showcase" // Optional header
        />

        <br></br>

        <Carousel
            items={galleryItems}
            className="images-carousel"
            // header="Photo Gallery" // Optional header
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>HELLO BOTTOM PAGE DWELLERS</p>

      </div>

      
  );
};

export default Home;