import React, { Component } from "react";
import "./Stylists.css";
import Glenda from "../../assets/images/Stylists/Glenda2.jpg";
import Lorena from "../../assets/images/Stylists/Lorena.jpg";
// import Slide from "react-reveal/Slide";

class StylistsComponent extends Component {
  state = {};

  render() {
    return (
      <div className="row justify-content-center no-gutters ">
        <div className="col-10 col-md-10">
          <div className="row justify-content-md-center mt-5">
            <div id="infobox" className="col-lg-8 p-2">
              <div className="row justify-content-md-center">
                <div className="col-md-6">
                  <img src={Lorena} alt="placeholder" />
                </div>

                <div className="col-md-6 pt-2 pb-2">
                  {/* <Slide right delay={1000}> */}
                  <p>
                    My name is Lorena and I have over 30 years experience of
                    cosmetology. With 15 years done in Guatemala City. After
                    coming to America for a better life, I've enjoyed working
                    for the public cutting hair and making people feel confident
                    in their appearances.
                    {/*                     
                    
                    I have been in this industry and community
                    for over 25 years. I enjoy the opportunity to apply my
                    experience, education, and love of this profession to give
                    you an enjoyable and satisfying salon experience. */}
                  </p>
                  {/* <p>Spanish translation</p> */}
                  {/* </Slide> */}
                </div>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-md-12 border border-dark rounded-lg">
                  <p>
                    Specializes in: Men, Women, & Children Hair Cuts,
                    Permanents, Hair Dyes, HairStyles, Highlights, Eyebrow
                    Waxing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center mt-5 mb-5">
            <div id="infobox" className="col-md-8 p-2">
              <div className="row justify-content-md-center">
                <div className="col-md-6">
                  <img src={Glenda} alt="placeholder" />
                </div>

                <div className="col-md-6 pt-2 pb-2">
                  {/* <Slide right delay={3000}> */}
                  <p>
                    My name is Glenda and I first began helping my father,
                    working at his barber shop in Guatemala. I then realized I
                    enjoyed working in the shop, working for the public and
                    cutting hair became my passion. With over 30 years of
                    experience I treat my clients like family, with open arms,
                    to help them feel confident in their appearance. I give
                    thanks to God for giving me this opportunity to serve the
                    public.
                  </p>
                  {/* <p>Spanish translation</p> */}

                  {/* </Slide> */}
                </div>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-md-12 border border-dark rounded-lg">
                  <p>
                    Specializes in: Men, Women, & Children Hair Cuts,
                    Highlights, Permanents Hair Color, Hairstyles & much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StylistsComponent;
