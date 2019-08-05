import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import historyImage from "../assets/history-image.png";
import store from "../assets/store-mobile.png";
import profile from "../assets/profile.png";
import diningRoom from "../assets/diningroom-mobile.png";
import oldTownOpen from "../assets/OldTownOpen-mobile.png";
import upstairs from "../assets/upstairs.png";
import inside from "../assets/inside-mobile.png";

const display = (
  <Carousel showStatus={false} showThumbs={false}>
  <div>
  <div className="bar-text">
    {" "}
    <span className="bold">BAR HISTORY</span>
    <br />
    <br />
    The Old Town has been serving since 1892. Interestingly, a twin bar was
    constructed on 19th Street in the same year, but it was later dismantled
    and moved to Massachusetts. During Prohibition, the Old Town was a
    speak-easy under the aegis of Tammany Hall, then on 17th Street. For
    perhaps the first half of the restaurant’s existence, the menu was of
    German influence. Virtually the entire establishment is original: the
    mahogany and marble bar is 55 feet long, the marble portion formerly
    functioning as a lunch counter. The tin ceilings are 16 feet high, there
    is 258 square feet of bevel edged plate mirror. The giant urinals, a
    historic icon themselves of sorts, were made in Hinsdale in 1910. The
    dumbwaiters are New York’s oldest active restaurant conveyors.
  </div>
  <img
    src={historyImage}
    className="history-image history-image-desktop"
    alt="a view of the Old Town at night"
  />
    </div>

  <div>
    <div className="our-founder-text">
      <span className="bold">OUR FOUNDER</span>
      <br />
      <br />
      Read about the life of our founder, Larry Meaghar, as featured on the
      Observer. https://observer.com/2007/02/tears-at-the-old-town/
    </div>
    <img src={store} className="store-image" />
    <img src={profile} className="profile-image" />
  </div>

  <div>
    <div className="blank-space">
      <div className="literary-history-text">
        <span className="bold">LITERARY LEGACY</span>
        <br />
        <br />
        The Old Town has long been a haven for writers both accomplished and
        aspiring. Frank McCourt first dropped by long ago when he was still
        teaching literature at the old Stuyvesant High School on 16th Street.
        British writer Nick Hornby helf his New York book party for ‘About a
        Boy’ here as did the Irish Nuala O’Faolain for ‘Almost There’. Nobel
        Prize winning poet Seamus Heaney met fellow Irishman, the notable
        playwright Brian Friel, for a drink at the bar one Sunday several
        years ago. American Poet Laureate Billy Collins has a book jacket on
        the wall as do Bugg Schulberg, Christopher Hitchens, Jim Dwyer, Joe
        Queenan, Demot McEvot, and Irish Kelly, John and the American Kelly,
        Tom. Pete Hamill wrote on the book jacket for ‘A Drinking Life’, “For
        the one bar that still makes me thirsty”. And not just a gathering
        place, the bar itself has been featured in numerous novels, from Caleb
        Carr’s 1890 New York thriller ‘The Alienist’, to most recently, Dermot
        McEvoy’s ‘Our Lady of Greenwich Village’.
      </div>
      <img src={diningRoom} className="dining-room" />
    </div>
  </div>

<div> 
  <div className="media-appearances-text">
    <span className="bold">MEDIA APPEARANCES</span>
    <br />
    <br />
    Over the years, many people have come into the Old Town, looked around
    and asked, “wasn’t this the bar in …?“ The bar has been used in a number
    of movies, television shows, commercials, photo shoots, even the
    occasional music video. Some of the films that have been shot within the
    bar are: ‘The Devil’s Own’, ‘State of Grace’, ‘Last Days of Disco’,
    ‘Q&A’, and ‘Bullets Over Broadway’. On television it has been featured
    in ‘Sex and the City’, provided the exterior for “Riff’s” in ‘Mad About
    You’ and, in his NBC years, was the bar that the late night camera
    glided thorugh to open the ‘David Letterman Show’ every night. Even
    Madonna strutted the length of the bar in ger ‘Bad Girl’ video.
  </div>
  <img src={oldTownOpen} className="old-town-open" />
</div>
  
<div>
  <div className="upstairs-text">
  <span className="bold">THE UPSTAIRS</span>
  <br />
  <br />
  In years past, the upstairs room was the “Ladies and Gentlemen's Dining
  Room”. It now serves the same menu as downstairs. Also available for
  private parties and other functions, this century old room provides a
  quiet alternative to the first floor activities.
</div>
  <img src={upstairs} className="upstairs-image" />
</div>    

<div>
  <div className="new-york-text">
  <span className="bold">A NEW YORK PLACE</span>
  <br />
  <br />
  The Old Town is New York as it was and as it is. But the mahogany bar,
  mammoth urinals, and tin ceilings are not the full essence of it. The
  patrons and staff are the primary attraction of our time tested tavern.
  Our managers, bartenders, and wait staff are New Yorkers with roots
  going back in nearly all cases for one hundred years and, in most cases,
  nearly two hundred years. On the stagg are seven
  great-great-grandchildren of John Fassig who owned Manhattan lager beer
  taverns from the 1840’s to his death in 1885 in his apartment over his
  saloon at 885 Second Avenue. They know New York, its taverns, its
  history, its politics, its people. For a full taste of New York, come
  drink in the Old Town.
</div>
  <img src={inside} className='new-york-image' />
    </div>
    </Carousel>
)
function History() {
  
  return (
    <div className="history" id="hstry">
      <a href="hstry"></a>
      
      <span className="history-title">History</span>
      <div className = 'bar-text-div'>
        {" "}
        <span className="bar-text"><strong className = 'bar-history-title'>BAR HISTORY</strong>
        <br />
        <br />
        The Old Town has been serving since 1892. Interestingly, a twin bar was
          constructed on 19th Street in the same year, but it was later dismantled
          and moved to Massachusetts. During Prohibition, the Old Town was a
          speak-easy under the aegis of Tammany Hall, then on 17th Street. For
          perhaps the first half of the restaurant’s existence, the menu was of
          German influence. Virtually the entire establishment is original: the
          mahogany and marble bar is 55 feet long, the marble portion formerly
          functioning as a lunch counter. The tin ceilings are 16 feet high, there
          is 258 square feet of bevel edged plate mirror. The giant urinals, a
          historic icon themselves of sorts, were made in Hinsdale in 1910. The
          dumbwaiters are New York’s oldest active restaurant conveyors.
          </span>  
      </div>
      <img
        src={historyImage}
        className="history-image"
        alt="a view of the Old Town at night"
          />
          
    </div>
    
  );
}

export default History;