const Card = (props) => {
    return (
    <div className="App">

      <img src="https://images.pexels.com/photos/2649841/pexels-photo-2649841.jpeg?auto=compress&cs=tinysrgb&w=600" alt="A Cat" width="350px" height="400px"/>

      {/* <h2>My Beautiful Cat</h2>

      <p> This is the cat I love best. It is Called Guru</p>

      <button>Show More</button> */}
      
      <h2>Name: {props.cats[name]}</h2>
      <h2>Age: {props.cats[age]}</h2>
      <h2>Location: {props.cats[location]}</h2>
      <h2>Description: {props.cats[description]}</h2>

    </div>
    );
}

export default Card;