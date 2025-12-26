# Amazon Vendor Theme Directory

Amazon Vendor Theme Directory is a **web application** that allows users to manage contacts efficiently. The application provides a landing view to pull equipment, add contacts, edit them, and validate the information before saving.

---

## Features

- **Landing Page / Dashboard**
  - Displays a list of contacts in a table.
  - Clicking on a contact opens an "Edit Contact" form with pre-filled values.
  - Validated vendor information appears in the table after submission.

- **Phone Directory Table**
  | Department | First Name | Last Name | Email |
  |-----------|------------|-----------|-------|
  - Search contacts by mobile number using the search input.
  - Contacts are displayed in the order they are added.

---

## Form Fields & Validation

### 1. Name
- Must be **valid**.
- Can contain **only letters and spaces**.
- Maximum length: **20 characters**.

### 2. Mobile Number
- Field is **required**.
- Can contain **only numbers**.
- Minimum length: **7 characters**.

### 3. Email
- Field is **required**.
- Must follow a **typical email format**:
  - 2–16 characters before the `@` symbol.
  - 2–10 alphanumeric characters after the `@` symbol and before the dot `.`.
  - 2–10 alphabetic characters after the dot `.`.

---

## Form-Level Validation
- Show **error messages** when any field fails validation:
  - `"_name": "name-required"` or `"name-invalid"`
  - `"_error": "email-required"` or `"email-invalid"`
- Reset form fields (name, email, mobile) after submission.
- Alert or error components should be visible when validation fails.

---

## User Interactions
1. Add a new contact using the form.
2. Click on an existing contact in the table to **edit**.
3. Form values populate automatically for editing.
4. Upon valid submission, the updated contact information appears in the table.

---

## Notes
- Ensure all validations are enforced **before adding or updating a contact**.
- The list of contacts must display in the **order they are added**.
- Proper error handling and user-friendly hints are required to guide users.
