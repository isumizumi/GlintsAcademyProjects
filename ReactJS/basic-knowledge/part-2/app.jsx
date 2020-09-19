class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <span>{this.props.name}</span>
        <span className="username">@{this.props.username}</span>
        <span className="date">{this.props.date}</span>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet 
          name="Isyana Karina"
          username="nanana"
          date={new Date().toDateString()}
          message="Hello World!"
        />
        <Tweet 
          name="Jokowow"
          username="jackwow"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet 
          name="Udhin"
          username="Udin Sedunia"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    )
  }
}

// lets put this on the DOM
ReactDOM.render(<App/>, document.getElementById("app"));
