import { validateFields } from './core.js';
const form = document.querySelector('#form');
const result = document.querySelector('#result');
function clearFeedback() {
  result.textContent = '';
  for (const key of ['name', 'email']) {
    document.querySelector(`#${key}`).removeAttribute('aria-invalid');
    document.querySelector(`#${key}-error`).textContent = '';
  }
}
form.addEventListener('input', clearFeedback);
form.addEventListener('submit', event => {
  event.preventDefault(); clearFeedback();
  const outcome = validateFields({ name: form.elements.name.value, email: form.elements.email.value });
  for (const key of ['name', 'email']) {
    document.querySelector(`#${key}-error`).textContent = outcome.errors[key] ?? '';
    document.querySelector(`#${key}`).setAttribute('aria-invalid', String(Boolean(outcome.errors[key])));
  }
  result.textContent = outcome.valid ? `Ready to review: ${outcome.values.name}, ${outcome.values.email}. Nothing was sent.` : 'Correct the highlighted fields.';
  if (!outcome.valid) document.querySelector(`#${Object.keys(outcome.errors)[0]}`).focus();
});
