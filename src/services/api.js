const BASE_URL = "https://to-do-java-production.up.railway.app/tasks";

export const getTasks = async () => {

  const response = await fetch(BASE_URL);

  return response.json();
};

export const createTask = async (title) => {

  const response = await fetch(BASE_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      title
    })

  });

  return response.json();
};

export const deleteTask = async (id) => {

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};

export const updateTask = async (id, title) => {

  const response = await fetch(`${BASE_URL}/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      title
    })

  });

  return response.json();
};