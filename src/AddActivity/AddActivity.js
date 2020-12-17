import React from 'react';
import VoyagerForm from '../VoyagerForm/VoyagerForm';
import ApiContext from '../ApiContext';
import config from '../config';
// import './AddActivity.css';

class AddActivity extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  };
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault();
    const newActivity = {
      title: e.target['activity-title'].value,
      content: e.target['activity-content'].value,
      label: e.target['activity-label'].value,
      voyage_id: e.target['activity-voyage-id'].value,
    };
    fetch(`${config.API_ENDPOINT}/activities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_TOKEN}`
      },
      body: JSON.stringify(newActivity),
    })
    .then(res => {
      if(!res.ok) {
        return res
          .json()
          .then(e =>
            Promise.reject(e)
          );
      }
      return res.json();
    })
    .then(activity => {
      this.context.addActivity(activity)
      this.props.history.push(`/voyage/${activity.voyage_id}`)
    })
    .catch(error => {
      console.error({ error })
    });
  }

  render() {
    const { voyages = [] } = this.context;

    return (
      <section className='AddActivity'>
        <h2>Create Activity</h2>
        <VoyagerForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='activity-title-input'>
              Title
            </label>
            <input 
              type='text'
              id='activity-title-input'
              name='activity-title'
            />
          </div>
          <div className='field'>
            <label htmlFor='activity-content-input'>
              Content
            </label>
            <textarea
              id='activity-content-input'
              name='activity-content'
            />
          </div>
          {/*make into a dropdown selection */}
          <div className='field'>
            <label htmlFor='activity-label-input'>
              Label
            </label>
            <input 
              type='text'
              id='activity-label-input'
              name='activity-label'
            />
          </div>

          <div className='field'>
            <label htmlFor='activity-voyage-select'>
              Voyage
            </label>
            <select id='activity-voyage-select' name='activity-voyage-id'>
              <option key={null}>...</option>
              {voyages.map(voyage =>
                <option key={voyage.id} value={voyage.id}>
                  {voyage.title}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Activity
            </button>
          </div>
        </VoyagerForm>
      </section>
    );
  }
}

export default AddActivity;