import React, { Component } from 'react';
import GifList from './components/GifList'

class App extends Component {
  render() {
    return (
      <div>
        <GifList/>
      </div>
    );
  }
}

export default App;


// KALAU SEMUA COMPONENT MAU DIGABUNG DI DALAM APP.JS

// import React, {Component} from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       gifs: [],
//       searchTerm: ''
//     }
//   }
//   componentDidMount() {
//     let randomTerms = ["happy", "funny", "baby", "silly", "party", "dance", "sing", "music", "jump", "run"];
//     fetch(`https://api.giphy.com/v1/gifs/search?q=${randomTerms[Math.floor(Math.random()*randomTerms.length)]}&api_key=3ejnZPnQHUneTCi7oxzIep8mGWBgY0PP`)
//       .then(r => r.json())
//       .then(r => {
//         this.setState({
//           gifs: this.state.gifs.concat(r.data[Math.floor(Math.random()*r.data.length)])
//         })
//       })
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   getGifs = (e) => {
//     e.preventDefault()
//     fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=3ejnZPnQHUneTCi7oxzIep8mGWBgY0PP`)
//       .then(r => r.json())
//       .then(r => {
//         this.setState({
//           gifs: this.state.gifs.concat(r.data[Math.floor(Math.random()*r.data.length)])
//         })
//       })
//     this.setState({
//       searchTerm: ''
//     })
//   }
//   clearList = () => {
//     this.setState({
//       gifs: []
//     })
//   }
//   render(){
//     let gifs = this.state.gifs.map((val,idx) => {
//       return <div className="col-sm-3" key={idx}>
//           <iframe src={val.embed_url}/>
//         </div>
//     })
//     return(
//       <div>
//         <h1 className="text-center">GIPHY PARTY</h1>
//          <div className="row">
//             <form className="form-inline col-sm-offset-3 col-sm-4" onSubmit={this.getGifs}>
//               <input type="text" className="form-control" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange}/>
//               <input type="submit" className="btn btn-primary" value="Search Giphy"/>
//             </form>
//             <button className="col-sm-2 btn btn-danger" onClick={this.clearList}>Remove Images</button>
//           </div>
//         {gifs}
//       </div>
//     )
//   }
// }