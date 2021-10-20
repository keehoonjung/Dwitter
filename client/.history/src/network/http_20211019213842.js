export default class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MzQ2NDY5NzYzNjQiLCJpYXQiOjE2MzQ2NDY5NzgsImV4cCI6MTYzNDgxOTc3OH0.xFOEuVkPUCeO1vSRE_7ZGtaneXlq1nUH3mqZcgR80a8",
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
