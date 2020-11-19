import React from 'react';
import { Link } from 'react-router-dom';
// import { format } from 'date-fns';
import './Activity.css';

class Activity extends React.Component {
  render() {
    return (
      <div className='Activity'>
        <h2 className='Activity__title'>
          <Link to={`/note/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <article className='Activity__body group-row'>
          <div className='Activity__details item-triple'>
            <p className='Activity__label'>
              Label: {this.props.tag}
            </p>
          </div>
          <div className='Activity__actions item group-column'>
            <button className='Activity__share item' type='button'>
              {' '}
              Share
            </button>
            <button className='Activity__delete item' type='button'>
              {' '}
              Remove
            </button>
          </div>
        </article>
        

        
        {/* <div className='Activity__dates'>
          <div className='Activity__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(this.props.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Activity;