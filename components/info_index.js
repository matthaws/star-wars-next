import React from 'react';
import InfoItem from './info_item';

class InfoIndex extends React.Component {
  static defaultProps = {
    info: {
      results: []
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);

    this.state = { query: '', selectedId: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateId = this.updateId.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ selectedId: null });
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  updateId(id) {
    return (e) => {
      this.setState({ selectedId: id });
    };
  }

  render() {
    const characters = this.props.info.results.map((character, idx) => (
      <InfoItem
        character={character}
        key={idx}
        id={idx}
        selectedId={this.state.selectedId}
        updateId={this.updateId}
        />
    ));

    return(
      <div className="search">
        <form onSubmit={ this.handleSubmit }>
          <label>CHOOSE YOUR DESTINY.
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.query}
               />
          </label>
          <input
            type='submit'
            value='USE THE FORCE'
            />
        </form>
        <ul id="characters">
            {characters}
        </ul>
      </div>
    );
  }
}

export default InfoIndex;
