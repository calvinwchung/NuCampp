import { Container, Col, Row } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <Row className='row-content align-items-center forms'>
                
            </Row>
            <Row className='row-content formBody'>
                <Col xs='7' className='formBody'>
                    <h2 className='contactText'>CONTACT US!</h2>
                    <hr/>
                </Col>
                <Col md='7' className='formBody'>
                    <ContactForm />
                </Col>
            </Row>
            
        </Container>
    )
};

export default ContactPage;