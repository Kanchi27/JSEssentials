function throttle(func,limit){
  let timer;
  let lastRan;
  return function(){
    let context = this;
    let args = arguments;
    if(!lastRan){
      func.apply(context,args)
      lastRan = Date.now()
    }else{
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        if(Date.now() - lastRan>=limit){
          func.apply(context,args);
          lastRan = Date.now();
        }
      },limit-(Date.now() - lastRan))
    }
  }
}
