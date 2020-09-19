import React, {Component} from 'react';
import MyCard from './MyCard';
import './BoxStyle.css';

export default class BoxCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myname: "Isyana"
    };

    // setTimeout(this.changeName.bind(this), 2000);
    setTimeout(() => {
      this.changeName()
    }, 2000);

  }

  changeName = () => {
    this.setState({ myname: "Isumi" });
  };

  render() {
    // map with ES2015 arrow functions
    const instructors = this.props.instructor.map((p) =>
      <MyCard key={p.id}
                name={p.name}
                type={p.type}
                image={p.image} />
    );
    return (
      <div className="container">
        <h1 className="title">Mentor Glints x Binar Academy</h1>
        <div className="poke-wrapper">
          <div className="poke-container">
            {instructors}
          </div>
          <div>
            <h2>Our beloved mentor is <br/><em>{this.state.myname}</em></h2>
          </div>
        </div>
      </div>
    );
  }
}

BoxCard.defaultProps = {
  instructor: [
    {
      id: 1,
      name: "Fikri",
      type: "Back-end",
      image: "./assets/images/Fikri.jpeg"
    },
    {
      id: 2,
      name: "Isyana Karina",
      type: "React-Native",
      image: "./assets/images/Isumi.jpeg"
    },
    {
      id: 3,
      name: "Yudi",
      type: "Front-end",
      image: "./assets/images/Yudi.jpeg"
    }
  ]
};
