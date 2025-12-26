import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <PhoneDirectory />
    </div>
  );
}
const contact_obj = {
  name: "",
  phone: "",
  email: "",
};

const contact_init = {
  name: "mustafa",
  phone: "0505674226",
  email: "mostfashmma@gmail.com",
};

const PhoneDirectory = () => {
  const [contactsList, setContactsList] = useState([contact_init]);

  return (
    <div>
      <Form setContactsList={setContactsList} />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>mobile</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const is_letter = (letter) =>
  ("a" <= letter && letter <= "z") || ("A" <= letter && letter <= "Z");

function isNameValid(name) {
  if (!(name.length > 0 && name.length < 8)) {
    alert("bad length");
    return false;
  }
  for (let ch of name) {
    console.log(ch);
    if (!is_letter(ch)) {
      alert("bad letter");
      return false;
    }
  }
  return true;
}

const isValidated = (form) => {
  const { name, phone, email } = form;
  return isNameValid(name);
};

const Form = ({ setContactsList }) => {
  const [form, setForm] = useState(contact_obj);
  const [showError, setError] = useState(false);

  function handleFormChange(e) {
    const type = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [type]: value };
    });
  }

  function handleSubmit() {
    if (!isValidated(form)) {
      setError(true);
      return;
    }
    setError(false);
    setContactsList((prev) => [...prev, form]);
  }

  return (
    <>
      <section>
        <input
          value={form.name}
          onChange={handleFormChange}
          name="name"
          placeholder="name"
        />
        <input
          value={form.phone}
          onChange={handleFormChange}
          name="phone"
          placeholder="phone"
        />
        <input
          value={form.email}
          onChange={handleFormChange}
          name="email"
          placeholder="email"
        />
        <button onClick={handleSubmit}> Submit </button>
      </section>
      {showError && <p>error </p>}
    </>
  );
};
