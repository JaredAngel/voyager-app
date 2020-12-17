import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';
import './Activity.css';

class Activity extends React.Component {
  static defaultProps = {
    onDeleteActivity: () => {},
  };
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault();
    const activityId = this.props.id;

    fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if(!res.ok) {
          return res
            .json()
            .then(e =>
              Promise.reject(e)
            );
        }
      })
      .then(() => {
        this.context.deleteActivity(activityId)
        this.props.onDeleteActivity(activityId)
      })
      .catch(error => {
        console.error({ error });
      });
  }

  // add handler function for 'share'


  render() {
    const { id, title, label } = this.props;
    return (
      <div className='Activity'>
        <h2 className='Activity__title'>
          <Link to={`/activity/${id}`}>
            {title}
          </Link>
        </h2>
        <article className='Activity__body group-row'>
          <div className='Activity__details item-triple'>
            <p className='Activity__label'>
              Label: {label}
            </p>
          </div>
          <div className='Activity__actions item group-column'>
            <button 
              className='Activity__delete item'
              type='button'
              onClick={this.handleClickDelete}
            >
              {' '}
              Remove
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Activity;