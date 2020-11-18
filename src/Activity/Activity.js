import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

class Activity extends React.Component {
  render() {
    return (
      <div className='Activity'>
        <h2 className='Activity__title'>
          <Link to={`/note/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <button className='Activity__delete' type='button'>
          {' '}
          Remove
        </button>
        <div className='Activity__dates'>
          <div className='Activity__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(this.props.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;