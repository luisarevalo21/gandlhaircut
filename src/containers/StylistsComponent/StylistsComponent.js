import React, { Component } from "react";
import "./Stylists.module.css";
import Glenda from "../../assets/images/Stylists/Glenda2.jpg";
import Lorena from "../../assets/images/Stylists/Lorena.jpg";

class StylistsComponent extends Component {
  state = {};

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="row justify-content-md-center mt-5">
            <div id="infobox" className="col-md-8 p-2">
              <div className="row justify-content-md-center">
                <div className="col-md-6">
                  <img src={Lorena} alt="placeholder" />
                </div>

                <div className="col-md-6 pt-2">
                  <p>
                    I have been in this industry and community for over 25
                    years. I enjoy the opportunity to apply my experience,
                    education, and love of this profession to give you an
                    enjoyable and satisfying salon experience.
                  </p>
                </div>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-md-12 border border-dark rounded-lg">
                  <p>
                    Specializes in: Men, Women & Children Hair Cuts, Permanents,
                    Dyes, HairStyles,Highlights, Eyebrow Waxing
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

                <div className="col-md-6 pt-2">
                  <p>
                    I have been working in the beauty industry since I was 19. I
                    love it as much as I did the first time I stood behind my
                    chair. I am the former owner of Nolan & Co. in Oak Lawn. I
                    regularly attend classes to learn the newest trends and
                    about the newest hair products. Helping to make someone feel
                    great about themselves is my passion. Don't be afraid of
                    change.
                  </p>
                </div>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-md-12 border border-dark rounded-lg">
                  <p>
                    Specializes in: Men, Women & Children Hair Cuts, Highlights,
                    Permanents Hair Color, Hairstyles & much more. Outs
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
