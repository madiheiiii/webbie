async function handleSubmit(e) {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  console.log(data);
}