import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CgProfile} from "react-icons/cg";
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useState } from 'react';



function Forms() {
    const  [word, setword] = useState(" ");
    const  [num, setnum] = useState(" ");
    const  [result, setresult] = useState(" ");
    const  [copySuccess, setcopySuccess] = useState(" ");
    const handleUserInput = (e) => {
        e.preventDefault();
        const alpha = Math.random().toString(36).substring(3,5)
        let s ="!@#$%&?~+=_:"
        let rnum = Math.floor(Math.random()* s.length)
        const sign =s.substring(rnum,rnum+1)
        const password = alpha+word+num+sign
        console.log(password);
        
        setresult(password)

        setnum("")
        setword("")


    }
    const copyPassword =(e) => {

       navigator.clipboard.writeText(result)


        setcopySuccess("copied")
    }
    
  return (
    <div>
        <div className="container">
        <div className="generator">
          <h2 className="generator-header">
            password generator
          </h2>
          <div className="generator-password">
            <div className="box">
            <Card >
            <Card.Body >
                <Card.Title>< CgProfile/></Card.Title>
                <Card.Text>
                <Form  onSubmit={handleUserInput}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Favourite word </Form.Label>
                        <Form.Control type="text" name='favword' onChange={e => setword(e.target.value)} value={word} />
                        <Form.Text className="text-muted">
                        whats that word you like and can remember! UPPERCASE
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Special number</Form.Label>
                        <Form.Control type="text" name='specialnum'onChange={e => setnum(e.target.value)} value={num} />
                    </Form.Group>
                    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Card.Text>
                
                <div className="password" style={{ width: '10rem' }} placeholder='here you go ' >
                     { result }
                </div>
                <Button variant="primary" type="submit"onClick={copyPassword} >
                    copy
                </Button> <p>{copySuccess}</p>
            </Card.Body>
            </Card>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms