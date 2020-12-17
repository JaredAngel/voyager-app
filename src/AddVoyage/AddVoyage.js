import React from 'react';
import VoyagerForm from '../VoyagerForm/VoyagerForm';
import ApiContext from '../ApiContext';
import config from '../config';
//import './AddVoyage.css

class AddVoyage extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  };
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault();
    const voyage = {
      title: e.target['voyage-title'].value,
    };

    fetch(`${config.API_ENDPOINT}/voyages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_TOKEN}`
      },
      body: JSON.stringify(voyage),
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
      .then(voyage => {
        this.context.addVoyage(voyage)
        this.props.history.push(`/voyage/${voyage.id}`)
      })
      .catch(error => {
        console.error({ error })
      });
  }

  render() {
    return (
      <section className='AddVoyage'>
        <h2>Plan a Voyage</h2>
        <VoyagerForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='voyage-title-input'>
              Title
            </label>
            <input 
              type='text'
              id='voyage-title-input'
              name='voyage-title'
            />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Voyage
            </button>
          </div>
        </VoyagerForm>
      </section>
    )
  }
}

export default AddVoyage;

