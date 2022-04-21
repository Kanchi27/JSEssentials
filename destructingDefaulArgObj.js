function setCookie(name, value, {domain = "osod.com"} = {}, secure='false',path='path'){
    console.log(secure, domain, path)
  }
  
setCookie('type','js');  // should output false osod.com path
setCookie('type','js',{domain:'google.com'})  // should output false google.com path