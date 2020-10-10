import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <input type="text" name="firstName"/>
          <input type="text" name="lastName"/>
          <input type="submit" value="Submit"/>
        </form>
        
      </div>
    )
  }
}

export default Form;