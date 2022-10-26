import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h2 className='text-center fw-bold text-success'>Frequently Asked Questions</h2>
            <p className='text-white fs-4'>Let Us Answer Your Questions
                Have questions? Look no further. Our Frequently Asked Questions (FAQ) make it easy for you to find answers to your most pressing inquiries into the School of Education. If you can't find your answer here, please feel free to contact us or use our site search to find the information you need.</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I learn more about the School of Education's variety of program offerings?</Accordion.Header>
                    <Accordion.Body>
                        While our website provides useful information about each program, you are encouraged to contact the Office of Admissions and Enrollment Services for more detailed information. We are here to help you
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should I apply?</Accordion.Header>
                    <Accordion.Body>
                        While some programs operate on rolling admissions, others have specific deadline dates. Please refer to the program’s homepage, along with the Deadline Dates by Program reference sheet, for the most accurate information
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How do I access my student account?</Accordion.Header>
                    <Accordion.Body>
                        CSSD (Computing Services and Systems Development) will send you an email of your account username and temporary password via postal mail. You should then access your account to change your password and set your preferences from the Manage My Account page.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the tuition?</Accordion.Header>
                    <Accordion.Body>
                        To view the current tuition rates and fees, please visit the Courses page on our website.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Where should I direct technology questions?</Accordion.Header>
                    <Accordion.Body>
                        Please visit Computing Services and Systems Development (CSSD), or contact the Help Desk at 412-624-HELP (412-624-4357).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How do I drop a course?</Accordion.Header>
                    <Accordion.Body>
                        The new online self-enrollment will allow you to drop courses until the end of add/drop period.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What is required to complete my application?</Accordion.Header>
                    <Accordion.Body>
                        Admission requirements vary by program. It is best to consult the program's homepage and the admissions procedures to determine the exact credentials required for your specific program.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;