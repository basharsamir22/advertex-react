import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Title from '../Utility/Title';
const Questions = () => {
    return (
        <div class="container questions">
                <Title title="Frequently Asked Questions" subTitle="he service we offer is specifically designed We are proud of our design team."/>
                <div class="container container-ques">
                    <Accordion className="ques-section" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    <Accordion className="ques-section" defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                                <Accordion.Body>
                                Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                                </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Amet minim mollit non deserunt ullamco </Accordion.Header>
                            <Accordion.Body>
                            Ut enim ad minim veniam quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
    )
}

export default Questions
