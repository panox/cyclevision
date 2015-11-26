if(document.domain == "localhost"){ // development
  window.configKeys = {
    url: 'http://localhost:3000/api/',
    bucketUrl: 'https://s3-eu-west-1.amazonaws.com/cyclevision/'
  }
} else if(document.domain == "http://panox.github.io/")
{ //production
  window.configKeys = {
    url: 'https://stark-stream-4100.herokuapp.com/api/',
    bucketUrl: 'https://s3-eu-west-1.amazonaws.com/cyclevision/'
  }
}
