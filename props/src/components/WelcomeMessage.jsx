import React from "react";

class WelcomeMessage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article>
        <h1>Welcome {this.props.userName}</h1>
        <p>Email: {this.props.email}</p>
        <p>Place: {this.props.place}</p>
        <p>Mobile No: {this.props.mobileNo}</p>
      </article>
    );
  }
}
export default WelcomeMessage;
