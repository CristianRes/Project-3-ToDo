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

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="text" 
                name="LastName"
                value={formData.LastName}
                onChange={handleChange} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text" 
                name="Email"
                value={formData.Email}
                onChange={handleChange} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Comments</Form.Label>
                <Form.Control 
                type="text" 
                name="Comments"
                value={formData.Comments}
                onChange={handleChange} 
                />
            </Form.Group>

        </Form>
            
        </>
    ) 
}

export default ContactPage