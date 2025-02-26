import { useState, useEffect } from 'react';
import axios from "axios";


function App() {
  const [people, setPeople] =useState([])
  console.log(1+"1"-1)

  async function getUser() {
    try {
        const res = await axios.get('https://randomuser.me/api/?results=10');
        setPeople(res.data.results)

    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
  getUser()
}, [])

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {people.map((item) => {
          return (
            <div className="col-md-4">
            <div className="bg-light p-3">
              <img
                src={item.picture.medium}
                alt="頭像"
                className="img-fluid rounded-circle"
              />
              <h2 className="mb-0">Susan Craig</h2>
              <p className="mb-0">susan.craig@example.com</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
