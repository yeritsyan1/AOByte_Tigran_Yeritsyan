class CustomPromise {
  constructor(executerFunc) {
    this.state = "pending";
    this.result = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.result = value;
        this.executeCallbacks();
      }
    };
    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.result = error;
        this.executeCallbacks();
      }
    };

    try {
      executerFunc(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  executeCallbacks() {
    this.callbacks.forEach(({ onFulfilled }) => {
      if (this.state === "fulfilled") {
        onFulfilled(this.result);
      }
    });
  }
  then(onFulfilled) {
    return new CustomPromise((resolve, reject) => {
      this.callbacks.push({
        onFulfilled: (value) => {
          try {
            const fulfilledValue = onFulfilled(value);
            resolve(fulfilledValue);
          } catch (error) {
            reject(error);
          }
        },
      });
    });
  }
}

function ajax(URL, method = "GET") {
  return new CustomPromise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, URL);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let data = xhr.response;
        res(data);
          console.log(data);
      } else {
        rej(new Error(xhr.statusText));
      }
    };
    xhr.send();
  });
}

function getData() {
  return ajax(
    "https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json",
    "GET"
  );
}

getData().then((data) => {
  console.log("Fulfilled:", data);
});

let a = getData();
a.then(() => console.log("First then")).then(() => console.log("Second then"));
