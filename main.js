class CustomPromise {
    constructor(executerFunc){
        this.state = 'pending';
        this.result = undefined;
        let resolve = (value) => {
            if(this.state === 'pending') {
                this.state = 'fulfilled';
                this.result = value;
            }
        }
        let reject = (error) => {
            if(this.state === 'pending') {
                this.state = 'rejected';
                this.result = error;
            }
        }
       try{
        executerFunc(resolve, reject) 
       } catch(error) {
          reject(error); 
       }
    }
} 

function ajax(URL, method="GET") {
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
   ajax("https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json", "GET")
}