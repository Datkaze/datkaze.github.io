import React from 'react'
import FeaturedItem from '../components/FeaturedItem'


const Home = () => {
  return (
     <React.Fragment>
         <body>


  

    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="caption">
              <h2>Ecommerce HTML Template</h2>
              <div className="line-dec"></div>
              <p>Pixie HTML Template can be converted into your desired CMS theme. Total <strong>5 pages</strong> included. You can use this Bootstrap v4.1.3 layout for any CMS. 
              <br/><br/>Please tell your friends about <a rel="nofollow" href="https://www.facebook.com/tooplate/">Tooplate</a> free template site. Thank you. Photo credit goes to <a rel="nofollow" href="https://www.pexels.com">Pexels website</a>.</p>
              <div className="main-button">
                <a href="#">Order Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FeaturedItem/>
    <div className="subscribe-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Subscribe on PIXIE now!</h1>
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className="main-content">
              <p>Integer vel turpis ultricies, lacinia ligula id, lobortis augue. Vivamus porttitor dui id dictum efficitur. Phasellus vel interdum elit.</p>
              <div className="container">
                <form id="subscribe" action="" method="get">
                  <div className="row">
                    <div className="col-md-7">
                      <fieldset>
                        <input name="email" type="text" className="form-control" id="email"
                        onfocus="if(this.value == 'Your Email...') { this.value = '' }" 
                    	onBlur="if(this.value == '') { this.value = 'Your Email...'}"
                    	value="Your Email..." required=""/>
                      </fieldset>
                    </div>
                    <div className="col-md-5">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">Subscribe Now!</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </body>
     </React.Fragment>
  )
}

export default Home