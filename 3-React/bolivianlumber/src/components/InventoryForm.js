import { Col, Row, Container } from 'reactstrap';

const InventoryForm = () => {
    return (
        <Container>
            <Row className='row-content align-items-center forms'>
                </Row>
                <Row className='row-content formBody woodList'>
                    <Col xs='7' className='formBody'>
                        <h2 className='tableHeader1'>BOLIVIAN SPECIES</h2>
                        <hr/>
                    </Col>
                    <Col md='7' className='formBody'>
                        <Row className='tableHeader'>
                            <Col>Trade Name</Col>
                            <Col>Scientific Name</Col>
                            <Col>Price/bdft</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>Tajibo</Col>
                            <Col>Tabebuia impetiginosa</Col>
                            <Col>$10.40</Col>
                        </Row>
                        <Row className='wood1'>
                            <Col>Morado</Col>
                            <Col>Machaerium scleroxylon</Col>
                            <Col>$19.20</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>Tarara</Col>
                            <Col>Centro microchaete</Col>
                            <Col>$6.40</Col>
                        </Row>
                        <Row className='wood1'>
                            <Col>Pauqio</Col>
                            <Col>Hymenaea courbaril</Col>
                            <Col>$6.40</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>Cuta</Col>
                            <Col>Phyllostylon rhamnoides</Col>
                            <Col>$4.80</Col>
                        </Row>
                    </Col>
                </Row>

        </Container>
    );
}

export default InventoryForm;