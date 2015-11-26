if(document.domain == "localhost"){ // development
  window.configKeys = {
    url: 'http://localhost:3000/api/',
    bucketUrl: 'https://s3-eu-west-1.amazonaws.com/cyclevision/'
  }
} else { //production
  window.configKeys = {
    url: 'http://herokusomething/api/',
    bucketUrl: 'https://s3-eu-west-1.amazonaws.com/cyclevision/'
  }
}
