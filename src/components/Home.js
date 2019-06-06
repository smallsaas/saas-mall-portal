import React from 'react';

class Home extends React.Component {

  onClick = () => {
    window.location = '#/index'
  }

  render() {
    return (
      <div onClick={() => this.onClick()}>fsdfsdgfgsdjgfudgsdhuigfydgui</div>
    )
  }

}

export default Home
