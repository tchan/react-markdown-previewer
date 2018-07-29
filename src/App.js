import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <TextArea value={this.state.value} onChange={this.handleChange} />
        <Preview value={this.state.value} />
      </div>
    );
  }
}

class TextArea extends Component {
  render() {
    return (
      <textarea
        onChange={this.props.onChange}
        id="editor"
        rows="4"
        cols="50"
        value={this.props.value}
        placeholder='Change me'
      />
    );
  }
}

class Preview extends Component {
  render() {
    return <div id="preview">{this.props.value}</div>;
  }
}

export default App;
