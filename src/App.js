import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        '# Header 1 \n## Header 2\n[I am an inline-style link](https://github.com/tchan) \n\nHello, `I am inline code` \n\n This is a code block \n```JavaScript\nvar s ="blah"```\n1. First Item\n2. Second item\n> Blockquotes\n\n**Image:**\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")'
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
        <div className='container'>
          <div>
          <TextArea value={this.state.value} onChange={this.handleChange} />
          </div>
          <Preview value={this.state.value} />
        </div>
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
        placeholder="Change me"
      />
    );
  }
}

class Preview extends Component {
  componentDidMount() {
    const markdown = marked(this.props.value);
    document.getElementById('preview').innerHTML = markdown;
  }
  componentDidUpdate() {
    const markdown = marked(this.props.value);
    document.getElementById('preview').innerHTML = markdown;
  }
  render() {
    return <div id="preview" />;
  }
}

export default App;
