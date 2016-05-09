var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementbyId('app'));      
