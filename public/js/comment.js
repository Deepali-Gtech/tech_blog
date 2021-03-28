const newFormHandler = async (event) => {
  event.preventDefault();
  const blog_id = document.querySelector('#blog-id').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (blog_id && content) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ blog_id, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

