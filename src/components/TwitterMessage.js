import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong><br></br>Remaining chars: {this.state.message.length ? this.props.maxChars-this.state.message.length : this.props.maxChars}<br></br>
        <input type="text" value={this.state.message} onChange = {this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
