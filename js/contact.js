/**
 * Contact Form & Toast Notification Manager
 * Handles real-time form validation, simulated submission, and clipboard copying
 */

export class ContactManager {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = document.getElementById('contact-submit-btn');
    this.toastContainer = document.getElementById('toast-container');
    this.copyButtons = document.querySelectorAll('.contact-copy-btn');

    this.init();
  }

  init() {
    this.bindFormValidation();
    this.bindClipboardCopy();
  }

  bindFormValidation() {
    if (!this.form) return;

    const fields = {
      name: {
        el: document.getElementById('contact-name'),
        validate: (val) => val.trim().length >= 2,
        errorMsg: 'Please enter your full name (at least 2 characters).'
      },
      email: {
        el: document.getElementById('contact-email'),
        validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
        errorMsg: 'Please enter a valid email address.'
      },
      subject: {
        el: document.getElementById('contact-subject'),
        validate: (val) => val.trim().length >= 3,
        errorMsg: 'Please enter a subject (at least 3 characters).'
      },
      message: {
        el: document.getElementById('contact-message'),
        validate: (val) => val.trim().length >= 10,
        errorMsg: 'Please provide a message with at least 10 characters.'
      }
    };

    // Live validation cleanup on input
    Object.values(fields).forEach(({ el }) => {
      if (!el) return;
      el.addEventListener('input', () => {
        const group = el.closest('.form-group');
        group?.classList.remove('has-error');
      });
    });

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate all fields
      Object.values(fields).forEach(({ el, validate, errorMsg }) => {
        if (!el) return;
        const group = el.closest('.form-group');
        const errorEl = group?.querySelector('.form-error');

        if (!validate(el.value)) {
          isValid = false;
          group?.classList.add('has-error');
          if (errorEl) errorEl.textContent = errorMsg;
        } else {
          group?.classList.remove('has-error');
        }
      });

      if (!isValid) {
        this.showToast('Please fix the errors in the form before submitting.', 'error');
        return;
      }

      // Simulate asynchronous form submission with spinner
      const originalBtnText = this.submitBtn.innerHTML;
      this.submitBtn.disabled = true;
      this.submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width: 1.125rem; height: 1.125rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Sending message...
      `;

      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));

        this.form.reset();
        this.showToast('Thank you! Your message has been sent successfully. I will get back to you shortly.', 'success');
      } catch (err) {
        this.showToast('An error occurred while sending your message. Please try again.', 'error');
      } finally {
        this.submitBtn.disabled = false;
        this.submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  bindClipboardCopy() {
    this.copyButtons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        try {
          await navigator.clipboard.writeText(textToCopy);
          this.showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        } catch (err) {
          this.showToast('Unable to copy to clipboard.', 'error');
        }
      });
    });
  }

  showToast(message, type = 'success') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconSvg =
      type === 'success'
        ? `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        : `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    // Trigger animation in next frame
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4500);
  }
}
