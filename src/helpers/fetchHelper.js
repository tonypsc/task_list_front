export async function fetchData(
  url,
  method = "GET",
  body = null,
  appJson = true
) {
  try {
    const options = {
      method,
      headers: {},
      body,
    };

    if (appJson) {
      options.headers["Content-Type"] = "application/json";
      if (body) options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    return await res.json();
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      errors: "Errors occurred processing the request.",
    };
  }
}
