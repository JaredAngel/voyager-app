import React from 'react';

class ActivityPageNav extends React.Component {
  render() {
    return (
      <div className='ActivityPageNav'>
        <button
          className='ActivityPageNav__back-button'
          onClick={() => this.props.history.goBack()}
        >
          <br />
          Back
        </button>
        {this.props.voyage && (
          <h3 className='ActivityPageNav__folder-name'>
            {this.props.voyage.name}
          </h3>
        )}
      </div>
    );
  }
}

ActivityPageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
};

export default ActivityPageNav;