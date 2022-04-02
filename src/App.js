
function App() {
  return (
<div>
  <div className="preloader">
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="inner" data-tilt data-tilt-perspective={2000}>
      <figure className="fadeInUp animated"> <img src="images/preloader.gif" alt="Image" /> </figure>
      <span className="typewriter" id="typewriter" /> </div>
    {/* end inner */} 
  </div>
  {/* end preloader */}
  <div className="transition-overlay">
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
  </div>
  {/* end transition-overlay */}
  <div className="navigation-menu">
    <div className="bg-layers"> <span /> <span /> <span /> <span /> </div>
    {/* end bg-layers */}
    <div className="inner" data-tilt data-tilt-perspective={2000}>
      <div className="menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">WHY US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      {/* end menu */}
      <blockquote>Let's create useful website for you ?</blockquote>
    </div>
    {/* end inner */} 
  </div>
  {/* end navigation-menu */}
  <nav className="navbar">
    <div className="left"> <a href="#">Home</a> </div>
    {/* end left */}
    <div className="logo"> <a href="index.html"><img src="images/theaddress/logo2.png" alt="Image" /></a> </div>
    {/* end logo */}
    <div className="right">
      <ul className="language">
        <li><a href="#">EN</a></li>
        {/* <li><a href="#">RU</a></li> */}
      </ul>
      <div className="hamburger-menu"><b>MENU</b>
        <div className="hamburger" id="hamburger-menu"> <span /> <span /> <span /> </div>
      </div>
      {/* end hamburger-menu */} 
    </div>
    {/* end right */} 
  </nav>
  {/* end navbar */}
  <header className="header">
    <aside className="left-side">
      <ul>
        <li><a href="#">FACEBOOK</a></li>
        <li><a href="#">BEHANCE</a></li>
        <li><a href="#">DRIBBBLE</a></li>
      </ul>
    </aside>
    {/* end left-side */}
    <div className="scroll-down"><small>SCROLL DOWN</small><span /></div>
    {/* end scroll-down */}
    <div className="sound"> <span> SOUND </span>
      <div className="equalizer">
        <div className="holder"> <span /> <span /> <span /> <span /><span /><span /> </div>
        {/* end holder */} 
      </div>
      {/* end equalizer */} 
    </div>
    {/* end sound */}
    <div className="swiper-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide" data-tilt data-tilt-max={5} data-tilt-speed={500} data-tilt-perspective={1500}>
          <div className="slide-inner bg-image" data-background="images/theaddress/1.png">
            <div className="container">
              <div className="tagline"><span>01</span>
                <h6>Transitions for a collected experiences</h6>
              </div>
              {/* end tagline */}
              <h1>New<br />
                <span>Cairo</span></h1>
              <div className="slide-btn"> <a href="#">
                  <div className="lines"> <span /> <span /> </div>
                  {/* end lines */}
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
                    <circle className="video-play-circle" fill="none" stroke="#fff" strokeWidth={2} strokeMiterlimit={1} cx={52} cy={52} r={50} />
                  </svg>
                  <b>LEARN MORE</b> </a> </div>
              {/* end slide-btn */} 
            </div>
            {/* end container */} 
          </div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */}
        <div className="swiper-slide" data-tilt data-tilt-max={5} data-tilt-speed={500} data-tilt-perspective={1500}>
          <div className="slide-inner bg-image" data-background="images/theaddress/86.png">
            <div className="container">
              <div className="tagline"><span>02</span>
                <h6>Connect your online stores to Brabusy</h6>
              </div>
              {/* end tagline */}
              <h1>El<br />
                <span>Sukhna</span></h1>
              <div className="slide-btn"> <a href="#">
                  <div className="lines"> <span /> <span /> </div>
                  {/* end lines */}
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
                    <circle className="video-play-circle" fill="none" stroke="#fff" strokeWidth={2} strokeMiterlimit={1} cx={52} cy={52} r={50} />
                  </svg>
                  <b>LEARN MORE</b> </a> </div>
              {/* end slide-btn */} 
            </div>
            {/* end container */} 
          </div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */}
        <div className="swiper-slide" data-tilt data-tilt-max={5} data-tilt-speed={500} data-tilt-perspective={1500}>
          <div className="slide-inner bg-image" data-background="images/theaddress/83.png">
            <div className="container">
              <div className="tagline"><span>03</span>
                <h6>View past and upcoming receivements</h6>
              </div>
              {/* end tagline */}
              <h1>North<br />
                <span>Coast</span></h1>
              <div className="slide-btn"> <a href="#">
                  <div className="lines"> <span /> <span /> </div>
                  {/* end lines */}
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
                    <circle className="video-play-circle" fill="none" stroke="#fff" strokeWidth={2} strokeMiterlimit={1} cx={52} cy={52} r={50} />
                  </svg>
                  <b>LEARN MORE</b> </a> </div>
              {/* end slide-btn */} 
            </div>
            {/* end container */} 
          </div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */} 
      </div>
      {/* end swiper-wrapper */}
      <div className="swiper-pagination" />
      {/* end swiper-pagination */}
      <div className="swiper-fraction" />
      {/* end swiper-fraction */} 
    </div>
    {/* end swiper-slider */} 
  </header>
  {/* end header */}

  <section className="services-content-block bg-image" data-background="images/theaddress/5.png" style={{backgroundRepeat:'no-repeat', backgroundPosition:'bottom right', backgroundColor:'black'}}>
    {/* <div className="video-bg">
      <video src="video.mp4" muted loop autoPlay />
    </div> */}
    {/* end video-bg */}
    <div className="container">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h6>About us</h6>
          <h2>Our Mission, Vision and Values. </h2>
        </div>
        {/* end col-12 */}
        <div className="col-md-8 wow fadeIn" data-wow-delay="0s">
          <div className="content-box">
            <div className="left"><small>01</small><span /></div>
            {/* end left */}
            <div className="right">
              <h4>OUR VALUES</h4>
              <p>We are a property consulting & brokerage company, established in ? To create a new era of property management , consultancy , 
                and brokerage services. Working around the clock to guarantee our customers satisfaction, we cooperated with trustable developers such as Who
                 are The Address Partners to offer you daily news and property market reports. Accordingly, we are here to present any Residential, Commercial, Retail, 
                 Administrative, and medical property opportunities all over Egypt & Mena Region.</p>
              
            </div>
            {/* end right */} 
          </div>
          {/* end content-box */} 
        </div>
        {/* end col-4 */}
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.05s">
          <div className="content-box">
            <div className="left"><small>02</small><span /></div>
            {/* end left */}
            <div className="right">
              <h4>MISSION</h4>
              <p>To keep our eyes on the latest updates & best deals all over the Egyptian real estate market. 
                To be honest with our customers & put them always in win-win situations with our developers. 
                To work hard on offering our partners of developers the best results and sales records.</p>
              
            </div>
            {/* end right */} 
          </div>
          {/* end content-box */} 
        </div>
        {/* end col-4 */}
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.10s">
          <div className="content-box">
            <div className="left"><small>03</small><span /></div>
            {/* end left */}
            <div className="right">
              <h4>VISION</h4>
              <p>To always prove that we are the best choice that our customers ever look. To be one of the leading property consultancy &
                 brokerage companies Egypt and Mena region..</p>
              
            </div>
            {/* end right */} 
          </div>
          {/* end content-box */} 
        </div>
        {/* end col-4 */} 
      </div>
      {/* end row */} 
    </div>
    {/* end container */} 
  </section>
  {/* end services-content-block */}
  <section className="works">
    <div className="container">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h6>SMOOTH INTERFACE INTERACTION</h6>
          <h2 data-text="Works">Our selected works and projects</h2>
        </div>
        {/* end col-12 */}
        <div className="col-12">
          <div className="project-box wow fadeIn" data-bg="#faf8ed">
            <figure> <a href="images/featured01.jpg" data-fancybox><img src="images/theaddress/21027822460jpg.jpg" alt="Image" /></a></figure>
            <div className="content-box">
              <div className="inner"> <small>AMAZING USER INTERFACE &amp; SMOOTH INTERACTION</small>
                <h3><span>PalmHills</span>Sokhna</h3>
                <div className="custom-link"> <a href="works-single.html">
                    <div className="lines"> <span /> <span /> </div>
                    {/* end lines */} 
                    <b>LEARN MORE</b></a> </div>
                {/* end custom-link */} 
              </div>
              {/* end inner */} 
            </div>
            {/* end content-box */} 
          </div>
          {/* end project-box */}
          <div className="project-box wow fadeIn" data-bg="#ece6f4">
            <figure> <a href="images/featured02.jpg" data-fancybox><img src="images/theaddress/80152344494jpg.jpg" alt="Image" /></a></figure>
            <div className="content-box">
              <div className="inner"> <small>AMAZING USER INTERFACE &amp; SMOOTH INTERACTION</small>
                <h3><span>Ora</span>Northcoast</h3>
                <div className="custom-link"> <a href="works-single.html">
                    <div className="lines"> <span /> <span /> </div>
                    {/* end lines */} 
                    <b>LEARN MORE</b></a> </div>
                {/* end custom-link */} 
              </div>
              {/* end inner */} 
            </div>
            {/* end content-box */} 
          </div>
          {/* end project-box */}
          <div className="project-box wow fadeIn" data-bg="#ebf8f3">
            <figure> <a href="images/featured03.jpg" data-fancybox><img src="images/theaddress/72866225616jpg.jpg" alt="Image" /></a></figure>
            <div className="content-box">
              <div className="inner"> <small>AMAZING USER INTERFACE &amp; SMOOTH INTERACTION</small>
                <h3><span>Cairo</span>Gate</h3>
                <div className="custom-link"> <a href="works-single.html">
                    <div className="lines"> <span /> <span /> </div>
                    {/* end lines */} 
                    <b>LEARN MORE</b></a> </div>
                {/* end custom-link */} 
              </div>
              {/* end inner */} 
            </div>
            {/* end content-box */} 
          </div>
          {/* end project-box */} 
        </div>
        {/* end col-12 */} 
      </div>
      {/* end row */} 
    </div>
    {/* end container */} 
  </section>
  {/* end works */}
  <section className="work-with-us">
    <div className="container">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h6>START WORKING WITH US</h6>
          <h2 data-text="Hire us">So that's us. There's no other way to put it.</h2>
        </div>
        {/* end col-12 */}
        <div className="col-lg-5 col-md-8 wow fadeIn">
          <h4>Do you have a project opportunity, or are you just a looking to get creative solutions?</h4>
          <div className="custom-link wow fadeIn"> <a href="#">
              <div className="lines"> <span /> <span /> </div>
              {/* end lines */} 
              <b>GET STARTED</b></a> </div>
          {/* end custom-link */} 
        </div>
        {/* end col-5 */} 
      </div>
      {/* end row */} 
    </div>
    {/* end container */} 
  </section>
  {/* end work-with-us */}
  <section className="clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 wow fadeIn">
          <h6>START WORKING WITH US</h6>
          <h2>Our clients</h2>
          <h4>Do you have a project opportunity, or are you just a looking to get creative solutions?</h4>
          <div className="custom-link wow fadeIn"> <a href="#">
              <div className="lines"> <span /> <span /> </div>
              {/* end lines */} 
              <b>BE OUR CLIENT</b></a> </div>
          {/* end custom-link */} 
        </div>
        {/* end col-4 */}
        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.10s">
          <ul>
            <li><img src="images/theaddress/11.png" alt="Image" /><small>PALMHILLS</small></li>
            <li><img src="images/theaddress/22.png" alt="Image" /><small>EMMAR</small></li>
            <li><img src="images/theaddress/33.png" alt="Image" /><small>SODIC</small></li>
            <li><img src="images/theaddress/55.png" alt="Image" /><small>ORA</small></li>
            <li><img src="images/theaddress/44.png" alt="Image" /><small>MISRITALIA</small></li>
            <li><img src="images/theaddress/66.png" alt="Image" /><small>CITYEDGE</small></li>
            <li><img src="images/theaddress/77.png" alt="Image" /><small>PYRAMIDS</small></li>
            <li><img src="images/theaddress/88.png" alt="Image" /><small>ORASCOM</small></li>
          </ul>
        </div>
        {/* end col-7 */} 
      </div>
      {/* end row */} 
    </div>
    {/* end container */} 
  </section>
  {/* end clients */}
  <footer className="footer">
    <div className="footer-quote wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-8"> <img src="images/theaddress/logo2.png" alt="Image" />
            <h2>Let's create the flexible website for your business ?</h2>
          </div>
        </div>
        {/* end row */} 
      </div>
      {/* end container */} 
    </div>
    {/* end footer-quote */}
    <div className="footer-contact wow fadeIn">
      <div className="container">
        <div className="row"> <div className="col-md-4">
            <address>
            Building 30, North 90 Road, <br/>5th Settlement, <br />
            New Cairo, Egypt
            </address>
          </div>
          {/* end col-4 */}
          <div className="col-md-4">
            <address>
              +201033322219<br />
              +90 598 558 24 80
            </address>
          </div>
          {/* end col-4 */}
          <div className="col-md-3">
            <address>
              <a href="#">info@theaddress-eg.com</a>
            </address>
          </div>
          {/* end col-2 */} 
        </div>
        {/* end row */} 
      </div>
      {/* end container */} 
    </div>
    {/* end footer-contact */}
    <div className="footer-bottom wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h5>Connect with us </h5>
            <ul>
              {/* <li><a href="#">Behance</a></li> */}
              <li><a href="#">Instagram</a></li>
              {/* <li><a href="#">Vimeo</a></li> */}
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          {/* end col-8 */} 
        </div>
        {/* end row */} 
      </div>
      {/* end container */} 
    </div>
    {/* end footer-bottom */} 
  </footer>
  {/* end footer */}
</div>

  );
}

export default App;
