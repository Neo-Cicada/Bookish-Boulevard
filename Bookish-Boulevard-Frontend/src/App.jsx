import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        setMessage(data);

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <div>
        <h1>this is a sample message</h1>
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default App;
