import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(0);

  const allCardData = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setCardData(response.data.data);
  };

  const loadMore = () => {
    setVisible(visible +6);
  };
  const loadLess = () => {
    setVisible(0);
  };


  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
    return (
     
      <div className="card-data">
        <div className="item">
         <img variant="top" src={person.avatar}/>
         <div className="info">
        <h2>{person.first_name} {person.last_name}</h2>
        
          <p>{person.email}</p>
          </div>
      </div>  
      
      </div>
    );
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="head">
          <h1>Fox Events</h1>
         
        </div>
        <div className="nav-button">
        <button onClick={loadMore}>Show User Data</button>
      <button onClick={loadLess}>Hide User Data</button>
      </div>
      </div>
     
      <div className="wrapper">
     
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      
       
    </div>
  );
};

export default App;