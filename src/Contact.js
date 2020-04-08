import React, { Component } from "react";
import Form from "./Form.js";
import { instagram, ACCESS_TOKEN } from "./api/instagram";

class Contact extends Component {
  state = { images: [], play: true };

  componentDidMount() {
    this.onLoadImages();
  }

  onLoadImages = () => {
    instagram
      .get("/media", {
        params: {
          fields: "caption,id,media_url,timestamp,username",
          access_token: ACCESS_TOKEN
        },
      })
      .then((res) => {
        this.setState({ images: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    const { play } = this.state.play;

    if (this.state.images.length === 0) {
      return (
        <div className="loader-container">
          <div className="segment">
            <div className="ui active dimmer">
              <div className="ui medium text loader">Loading</div>
            </div>
          </div>
        </div>
      );
    }

    const IGUrl = "https://www.instagram.com/sarahnessaart/";

    return (
      <div className="contact-container">
        <Form />

        <div className="instagram-container">
          {this.state.images.map((image) => {
            return (
              <div key={image.id} className="instagram-image">
                <div className="inner">
                  <img src={image.media_url} alt="@sarahnessaart Instagram" />
                  <a
                    href={IGUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={play ? "reveal" : "reveal paused"}
                    onAnimationStart={() => this.setState({ play: true })}
                    onAnimationEnd={() => this.setState({ play: false })}
                  >
                    <div>
                      <i className="instagram icon"></i>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contact;
