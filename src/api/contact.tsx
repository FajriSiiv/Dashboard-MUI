export const API_GetContact = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => data.json()
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const API_GetContactByID = async (id: any) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    ).then((data) => data.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const API_EditContact = async (id: any, body: any) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id,

      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then((data) => data.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const API_DeleteContact = async (id: any) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => data.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};
