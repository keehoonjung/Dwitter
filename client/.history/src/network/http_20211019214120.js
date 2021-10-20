export default class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MzQ2NDcyNDAyNTQiLCJpYXQiOjE2MzQ2NDcyNDAsImV4cCI6MTYzNDgyMDA0MH0.-tKE_9kyIx06oNbslVUx33ZxrGSi8rGY9_32OkYLvaw`,
        ...options.headers,
      },
    });
    let data;
    try {
      data = res.json();
    } catch (e) {
      console.error(e);
    }

    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : "Somthing went wrong!";
      throw new Error(message);
    }
    return data;
  }
}
