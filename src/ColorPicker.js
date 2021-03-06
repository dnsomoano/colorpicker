import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0,
      saturation: 50,
      lightness: 50,
      alpha: 1
    };
  }

  slideHue = event => {
    const raiseHue = event.target.value;
    this.setState({
      hue: raiseHue
    });
    // console.log(this.state.hue);
  };

  slideSaturation = event => {
    const raiseSaturation = event.target.value;
    this.setState({
      saturation: raiseSaturation
    });
    // console.log(this.state.saturation);
  };

  slideLightness = event => {
    const raiseLightness = event.target.value;
    this.setState({
      lightness: raiseLightness
    });
    // console.log(this.state.lightness);
  };

  slideAlpha = event => {
    const raiseAlpha = event.target.value;
    this.setState({
      alpha: raiseAlpha / 100
    });
    // console.log(this.state.lightness);
  };

  render() {
    return (
      <div>
        <section className="main-container">
          <section
            className="box"
            style={{
              backgroundColor: `hsla(${this.state.hue}, ${
                this.state.saturation
              }%, ${this.state.lightness}%,${this.state.alpha})`
            }}
          />
          <section className="fieldset-container">
            <fieldset>
              <label for="hue">Hue</label>
              <input
                className="placeholder-style"
                placeholder={this.state.hue}
              />
              <input
                type="range"
                id="hue"
                name="hue"
                min="1"
                max="360"
                onInput={this.slideHue}
                value={this.state.hue}
              />
              <label for="saturation">Saturation</label>
              <input
                className="placeholder-style"
                placeholder={this.state.saturation}
              />
              <input
                type="range"
                id="saturation"
                name="saturation"
                min="1"
                max="100"
                onInput={this.slideSaturation}
                value={this.state.saturation}
              />
              <label for="lightness">Lightness</label>
              <input
                className="placeholder-style"
                placeholder={this.state.lightness}
              />
              <input
                type="range"
                id="lightness"
                name="lightness"
                min="1"
                max="100"
                onInput={this.slideLightness}
                value={this.state.lightness}
              />
              <label for="alpha">Alpha</label>
              <input
                className="placeholder-style"
                placeholder={this.state.alpha}
              />
              <input
                type="range"
                id="alpha"
                name="alpha"
                min="0.00"
                max="1.00"
                onInput={this.slideAlpha}
                value={this.state.alpha}
              />
            </fieldset>
          </section>
        </section>
        {/* if ({this.state.alpha}!= 1) { */}
        <p id="display-hsla">
          hsla(
          {this.state.hue}, {this.state.saturation}
          %, {this.state.lightness}
          %,
          {this.state.alpha})
        </p>
        {/* } */}
      </div>
    );
  }
}

export default ColorPicker;
