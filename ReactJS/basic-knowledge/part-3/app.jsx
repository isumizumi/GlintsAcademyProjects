class Person extends React.Component {
  
  render() {
    let simTest = this.props.age >= 17 ?
      "Good luck for your Test!" :
      "You must be 17, yes!";

    let hobbies = this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) 

    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {this.props.name.slice(0,6)}</li>
          <li>Age: {this.props.age}</li>
        </ul>
      <div>
        <ul>Hobbies:
          {hobbies}
        </ul>
      </div>
        <h3>{simTest}</h3>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Person 
          name="Harry Potter"
          age={28}
          hobbies={["bowling","watching tv","drinking beer"]}
        />
        <Person
          name="Johny Doe"
          age={34}
          hobbies={["painting","gambling"]}
        />
        <Person
          name="Lorem Ipsum"
          age={10}
          hobbies={["skateboarding","making prank calls"]}
        />
        <Person
          name="Lolita Lily"
          age={8}
          hobbies={["reading","saxophone","eating vegetables"]}
        />
      </div>
    )
  }
}

// lets put this on the DOM
ReactDOM.render(<App/>, document.getElementById("app"));
