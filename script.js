    document.getElementById('clickBtn').addEventListener('click', () => {
      alert('Button was clicked! ');
    });

    document.getElementById('secretBtn').addEventListener('dblclick', () => {
      alert('🤫 Secret Action Triggered!');
    });

    document.getElementById('hoverText').addEventListener('mouseover', () => {
      document.getElementById('hoverText').style.color = 'blue';
    });

    document.getElementById('keyInput').addEventListener('input', (e) => {
      document.getElementById('keypressOutput').innerText = `You typed: ${e.target.value}`;
    });

    document.getElementById('changeBtn').addEventListener('click', function () {
      this.style.backgroundColor = this.style.backgroundColor === 'lightgreen' ? '' : 'lightgreen';
    });

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById(`tab${tab.dataset.tab}`).classList.add('active');
      });
    });

    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');
    const emailFeedback = document.getElementById('emailFeedback');
    const passFeedback = document.getElementById('passFeedback');

    emailInput.addEventListener('input', () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      emailFeedback.textContent = valid ? 'Valid email ✔️' : 'Invalid email format';
      emailFeedback.className = valid ? 'valid' : 'error';
    });

    passInput.addEventListener('input', () => {
      const valid = passInput.value.length >= 8;
      passFeedback.textContent = valid ? 'Strong password ✔️' : 'Password must be at least 8 characters';
      passFeedback.className = valid ? 'valid' : 'error';
    });

    document.getElementById('myForm').addEventListener('submit', function (e) {
      if (!emailInput.value || !passInput.value || emailFeedback.className === 'error' || passFeedback.className === 'error') {
        e.preventDefault();
        alert('Please fix the errors before submitting.');
      }
    });