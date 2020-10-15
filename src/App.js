import React from "react";

export default class App extends React.Component {
  state = {
    urls: [{ id: 1, url: "sample_url", shortUrl: "t-rex/0" }],
    currentShortUrl: "",
  };

  handleSubmit = (e) => {
    const url = e.target.url.value;
    const id = this.state.urls.length + 1;

    const shortUrl = this.generateShortUrl(id);

    const newUrl = { id: id, url: url, shortUrl: "t-rex/" + shortUrl };
    this.setState({
      urls: [...this.state.urls, newUrl],
      currentShortUrl: "t-rex/" + shortUrl,
    });
  };

  generateShortUrl = (id) => {
    console.log("generate ran");
    const base62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
      ""
    );
    let temp_value = id;
    let new_value = "";

    while (temp_value > 0) {
      new_value = base62[temp_value % 62] + new_value;
      temp_value = (temp_value - (temp_value % 62)) / 62;
    }
    console.log(new_value);

    return new_value;
  };

  render() {
    const shortUrl = this.state.currentShortUrl;
    console.log(shortUrl);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shorten That URL, Kid</h1>
        </header>
        <main>
          <form
            className="form-shorten"
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
          >
            <label>
              Enter a URL:{"  "}
              <input type="text" name="url" id="url" />
            </label>
            <button type="submit">Shorten</button>
          </form>

          <div className="short-result">
            {shortUrl ? <p>{shortUrl}</p> : ""}
          </div>
        </main>
      </div>
    );
  }
}
