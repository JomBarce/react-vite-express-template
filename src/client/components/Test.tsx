import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Test() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submitted data:', formData);

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      {submitted && (
        <p style={{ color: 'green' }}>Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Name*:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Email*:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        {/* Subject */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Subject:</label>
          <br />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Message*:</label>
          <br />
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            rows={5}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Test;
