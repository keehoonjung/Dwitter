export default class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (res.status === 204) {
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (e) {
      console.error(e);
    }

    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message
          ? data.message
          : data.errors[0].message
          ? data.errors[0].message
          : "Something went wrong";
      throw new Error(message);
    }
    return data;
  }
}
