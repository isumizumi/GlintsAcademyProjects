// Class component
class FirstComponent extends React.Component {
  render() {
      return (
        <div class="card">
            <p>{this.props.name}</p>
            <p>{this.props.job}</p>
        </div>
      )
  }
}

class SecondComponent extends React.Component {
  render() {
      return (
        <div class="card">
            <p>{this.props.name}</p>
            <p>{this.props.job}</p>
        </div>
      )
  }
}

class ThirdComponent extends React.Component {
  render() {
      return (
        <div class="card">
            <p>{this.props.name}</p>
            <p>{this.props.job}</p>
        </div>
      )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent name="Student1" job="Frontend" />
        <SecondComponent name="Student2" job="Backend"/>
        <ThirdComponent name="Student3" job="React Native"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));



// Function component
// const Card = (props) => {
//     return(
//         <div class="card">
//             <p class="title">{props.name}</p>
//             <p class="title">{props.job}</p>
//         </div>
//     )   
// }

// const App = () => {
//     return(
//       <div>
//         <Card name="Student1" job="Frontend" />
//         <Card name="Student2" job="Backend" />
//         <Card name="Student3" job="React Native" />
//       </div>
//     )
// }

// const domContainer = document.querySelector('#root')
// ReactDOM.render(<App/>, domContainer)