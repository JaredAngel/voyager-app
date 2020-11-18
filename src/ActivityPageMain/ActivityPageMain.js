import React from 'react';
import Activity from '../Activity/Activity';

class ActivityPageMain extends React.Component {
  render() {
    return (
      <section className='ActivityPageMain'>
        <Activity
          id={this.props.activity.id}
          name={this.props.activity.name}
          modified={this.props.activity.modified}
        />
        <div className='ActivityPageMain__content'>
          {this.props.activity.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    );
  }
}

ActivityPageMain.defaultProps = {
  activity: {
    content: '',
  }
}

export default ActivityPageMain;