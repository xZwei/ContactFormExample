import React from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

export class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
        };
    }

    handleSubmit = async () => {
        let {name, phone, email, message} = this.state;
        var dto = {
            Name: name,
            Phone: phone,
            Email: email,
            Message: message
        };

        var response = await fetch('api/contactus', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(dto)
        });

        var success = await response.json();
        alert(success.message ? success.message : "Whoops! Fucked up!");
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        let {name, phone, email, message} = this.state;
        return (
            <div>
                <InputGroup>
                    <InputGroupText>Name</InputGroupText>
                    <Input onChange={this.handleNameChange} value={name}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>Phone</InputGroupText>
                    <Input onChange={this.handlePhoneChange} value={phone}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>Email</InputGroupText>
                    <Input onChange={this.handleEmailChange} value={email}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>Message</InputGroupText>
                    <Input  onChange={this.handleMessageChange} value={message}/>
                </InputGroup>
                <Button color='primary' onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>
        );
    }
}