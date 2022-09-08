function setCookie(name, value, {domain = "osod.com"} = {}, secure='false',path='path'){
    console.log(secure, domain, path)
  }
  
const obj = {domain:'google.com'}
setCookie('type','js');  // should output =>    false osod.com   path
setCookie('type','js',obj)  // should output => false google.com path
