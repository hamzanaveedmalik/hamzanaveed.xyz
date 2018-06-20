import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (

        <div className="valign-wrapper grey darken-4" styles= {{width: absolute, height:absolute, position: absolute}}>
          <div className="valign" styles="width:100%;">
            <div className="container">
              <div className="row">
                <div id="list-parent" className="col m6 s6 offset-s3 white-text">
                      <h2 className="left">Hi,Im Hamza Naveed</h2>
                      <h5 className="left">
                        I am a Software Engineer with a specialism in computational linguistics.
                        I am currently a resident entrepreneur with with <a href="http://zinc.vc" target="blank" className="link-text">ZincVC</a>
                      </h5>
                      <p className="left">


                      Im interested in augmenting human senses through artificial intelligence, modern development languages, travel and photography.
                      </p>
                      <p className="left">
                      <a href="mailto:hamzanaveedmalik@gmail.com" className="link-text"><b><u>Say hello</u></b></a>
                      or
                      <a href="media/HamzaNaveedCV.pdf" download="HamzaNaveedCV" className="link-text"><b><u>Download my CV</u></b></a>
                    </p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
    );
  }
}

export default Home;
