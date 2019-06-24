import React      from 'react';
import CodeMirror from 'react-codemirror';
import                 'codemirror/mode/markdown/markdown';

class BinsEditor extends React.Component {
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={ this.props.bin.content }
          onChange={ this.onEditorChange }
          options={{ mode: 'markdown', lineNumbers: true }}
        />
      </div>
    );
  }

  onEditorChange = (content) => {
    Meteor.call('bins.update', this.props.bin, content);
  }
}

export default BinsEditor;