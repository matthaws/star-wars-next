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
      <div>
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
        <ul>
          {characters}
        </ul>
        <style jsx>{`
          form {
            text-align: center;
          }

          label {
            font-family: StarWars;
            font-size: 20px;
          }

          input[type="text"] {
            display: block;
            margin: 50px auto;
            height: 50px;
            width: 400px;
            font-size: 35px;
            font-family: StarWars;
          }

          input[type="submit"] {
            background-color: black;
            border: 1px solid yellow;
            padding: 10px;
            border-radius: 5px;
            color: yellow;
            font-size: 20px;
            font-family: StarWars;
            cursor: pointer;
          }

          ul {
            padding: 100px;
            list-style: none;
            text-align: center;
            font-family: StarWars;
          }`}</style>
      </div>
    );
  }
}

export default InfoIndex;
