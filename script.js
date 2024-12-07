document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        document.getElementById('signup-form').reset();
      } else {
        alert(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  });
  