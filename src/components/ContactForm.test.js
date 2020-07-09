import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm";


test("Form can be filled out", () => {
render(<ContactForm />);

 const firstNameInput = screen.getByTestId(/firstname/i)
 const lastNameInput = screen.getByTestId(/lastname/i)
 const emailInput = screen.getByTestId(/email/i)
 const messageInput = screen.getByTestId(/message/i)
 const submitButton = screen.getByTestId(/submit/i)

 fireEvent.change(firstNameInput, {target: {value: "Marina"}});
 fireEvent.change(lastNameInput, {target: {value: "Martinez"}});
 fireEvent.change(emailInput, {target: { value:"email@email.com"}});
 fireEvent.change(messageInput, {target: {value: "This is a message!"}});
 fireEvent.click(submitButton);

 expect(firstNameInput.value).toBe("Marina")
 expect(lastNameInput.value).toBe("Martinez")
 expect(emailInput.value).toBe("email@email.com")
 expect(messageInput.value).toBe("This is a message!")

//  expect(screen.findByText("/Marina/i")).toBeInTheDocument();
})

test("Errors show up if value is empty", () => {
    render(<ContactForm />)

    const submitButton =screen.getByTestId(/submit/i)

    fireEvent.click(submitButton);

    setTimeout(() => {
        expect(screen.getByTestId(/firstNameError/i)).toBeInTheDocument();
        expect(screen.getByTestId(/lastNameError/i)).toBeInTheDocument();
        expect(screen.getByTestId(/emailError/i)).toBeInTheDocument();
    }, 1);
});


