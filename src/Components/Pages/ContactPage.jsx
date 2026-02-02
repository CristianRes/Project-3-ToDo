import Form from 'react-bootstrap/Form';


function ContactPage(){

    function handleChange(){
    }

    return(
        <>
        <h1>Contact Us</h1>
        <p> Details of Contact</p>
        <Form>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" 
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange} 
                />

            </Form.Group>
        </Form>
            
        </>
    ) 
}

export default ContactPage