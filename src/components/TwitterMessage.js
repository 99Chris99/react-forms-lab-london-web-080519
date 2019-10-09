import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      charsLeft: props.maxChars
      
    };
  }

  useChangeState = (event) => {
    this.setState(
      {
      value: event.target.value,
      charsLeft: this.state.charsLeft-1
      }
      )
      console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event => this.useChangeState(event)}/>
        <h3>{this.state.charsLeft}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
