export function validateFields({ name, email }) {
  const values = { name: name.trim(), email: email.trim() };
  const errors = {};
  if (!values.name) errors.name = 'Enter a name, not only spaces.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter an email such as learner@example.com.';
  return { values, errors, valid: Object.keys(errors).length === 0 };
}
