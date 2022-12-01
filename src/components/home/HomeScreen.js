import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../home/HomeScreen.css'

const HomeScreen = () => {
  const [ countryName, setCountryName ] = useState('')

  return (
    <Container className="container">
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter country"
          className="mb-3"
        >
          <Form.Control type="textarea" placeholder="Enter country" onChange={e => setCountryName(e.target.value)}/>
        </FloatingLabel>
        <div className='link-container'>
          <Link className={countryName===''? "disabled-btn" : "active-btn"} to={`/country/${countryName}`} style={{fontSize: 18, padding: 10, paddingRight: 20, paddingLeft: 20, color: 'white', textDecoration: 'none'}}>Submit</Link>
        </div>
      </Form>      
    </Container>
  )
}

export default HomeScreen