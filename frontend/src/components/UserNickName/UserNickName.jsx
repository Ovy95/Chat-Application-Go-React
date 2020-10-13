import React, { Component } from "react";
import "./UserNickName.scss";

class UserNickName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
    }
    props = this.state
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { firstName} = this.state
    console.log(`A first name was printed a: ${firstName}.`)

    console.log(this.state)

   return firstName
  }
  render() {
    return (
   <div>
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name: 
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="SUBMIT NAME" onSubmit={this.props.send} />

      </form>

      </div>

      </div>

    );
  }
}






//   render() {
//     return (
//       <div className="UserNickName">
//         <input onKeyDown={this.props.sen} placeholder = "entername" />
//       </div>
//     );
//   }
// }

export default UserNickName;