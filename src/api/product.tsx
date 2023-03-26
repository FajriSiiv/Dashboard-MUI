const url = "https://dummyjson.com/products";

export const API_GetProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => data.products);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const API_GetProductByID = async (id: any) => {
  try {
    const res = await fetch(url + "/" + id).then((data) => data.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const API_AddProduct = async (body: any) => {
  try {
    const res = await fetch(
      url,

      {
        method: "POST",
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

export const API_EditProduct = async (id: any, body: any) => {
  try {
    const res = await fetch(
      url + "/" + id,

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

export const API_DeleteProduct = async (id: any) => {
  try {
    const res = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};
