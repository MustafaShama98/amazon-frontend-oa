Question 1
Amazon Vendor Theme Directory
Amazon Vendor Theme Directory is a web application that allows a user to manage contacts.

Use this landing view to pull equipment Functionality that can include the form elements.
Pulling a contact from the table (clicking) should open an "Edit contact" form. The value should populate into the input boxes if a user clicks the form type. Once validated ensure the vendor's information should appear to the table.

Phone Directory
DepartmentFirst NameLast NameEmail
Search Contact by Mobile No: [___]
Contacts Summary
NameMobileEmailJulie Hanki0123456780Julie.Hanki@Gmail.Com

Functionality
The following fields are included in the form

It should be valid
It should contain only letters and spaces.
It should be less than or equal to 20 characters in length

Mobile Number

The field is required.
It should contain only Numbers.
It must be minimum 7 characters & hours.

Email

The field is required.
It must follow a typical email format
It can have 2 to 16 characters before the period @
After the period(.) characters should be a valid email address.
After the (@) symbol, it should contain 2 to 10 alphanumeric characters before encountering the dot symbol (.).
After the (.) dot symbol, it should contain 2 to 10 alphabetic characters.

Hint the user on form-level Validation Rendered error:
When the alert or error component if visible
Reset the form-data by clearing the inputs for the name, email, and mobile.
The list of contacts is the table should be displayed in the order it is added

Validation
If the submit button is clicked and any of the field requirements are not met and the validations fail, show the error message correspondingly i.e "error" data.
"_name":"name-required or name-invalid",
The following data: text of attributes are required in the component for the tests to pass:

If the submit button is clicked and any of the field requirements are not met and the validations fail, show the error message correspondingly i.e "error" data.
"_error":"email-required or email-invalid",
