/*  <- Make sure to uncomment accordingly to test the flow below-> */


// -------------------------------------
// 1. Synchronous Flow
// -------------------------------------



new Promise((resolve, reject) => {
  console.log('Hi one')
})

console.log('Hi two')


// --OP: -Hi one---Hi two-------------------------------


// -------------------------------------
// 2. Adding callback queues in picture
// -------------------------------------




new Promise((resolve, reject) => {
  console.log('Hi one')
})

the code below is a part of Browser API's and get's sent to the callback queue when ready and executed on the call stack whenever it's empty

setTimeout(() => {
  console.log('Inside timeout')
}, 0)

console.log('Hi two')



// --OP: -Hi one---Hi two-----Inside timeout--------------------------


// -------------------------------------
// 3. Adding microtask queues in picture
// -------------------------------------


let data = new Promise((resolve, reject) => {
  console.log('Hi one') // synchronous code, not a part of microtask
  resolve('Promise resolved data') //  looks for the promise handler and tries to run it therefore sends it to the microtask queue (there isn't any at this point)
})

// the code below is a part of Browser API's and get's sent to the callback queue when ready and executed on the call stack whenever it's empty
setTimeout(() => {
  console.log('Inside timeout')
}, 0)

console.log('Hi two')

// the code below is a promise handler and gets sent to the microtask queue whenever promises are resolved, which is prioritized over the setTimeout in this case
data.then((res) => {
  console.log(res)
})


// ---OP----Hi one-----Hi two----Promise resolved data-----Inside timeout-----


// -------------------------------------
// 4. Adding setTimeout inside a promise as per the post
// -------------------------------------



let data = new Promise((resolve, reject) => {
    console.log('Hi one') // synchronous code execution
  
    // the code below is a part of Browser API's and get's sent to the callback queue when ready and executed on the call stack whenever it's empty
    setTimeout(() => {
      console.log('Timeout')  // get's executed first before the next line of code is added to the call stack
      resolve('Hello') // this is where the microtask comes into picture. // looks for the promise handler and tries to run it therefore sends it to the microtask queue 
    }, 0)
})

// the callback inside .then is sent to the microtask queue, waiting to b executed ONLY WHEN the promise is resolved
data.then((res) => {
   // the below piece of code is waiting in the microtask queue to be executed once the call stack is empty
   console.log(res)
})


console.log('Hi two')


// ---OP----Hi one-----Hi two----Timeout-----Hello-----



//----------------------------
// THE ORDER OF CODE FLOE
//----------------------------

/*

The order of flow
-> 1. logs, "Hi One"

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
| log('Hi One') |       |               |       |               |       |               |

    stack                    apis                    callback                 microtask 


-> 2. see's Timeout, sends it to the api's secetion for the timer to complete, once done it adds the callback in the callback queue waiting to be executed in the callstack

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|               |       |   setTimeout  |       |               |       |               |

    stack                    apis                    callback                 microtask 
    

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|               |       |               |       |   timeout CB  |       |               |

    stack                    apis                    callback                 microtask 


-> 3. see's a promise handler, sends it to the api's section waiting for the callback to b invoked so that it can send the callback to the micro task queue

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|               |       |promise handler|       |   timeout CB  |       |               |

    stack                    apis                    callback                 microtask 



-> 4. logs, "Hi Two"

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
| log('Hi Two') |       |promise handler|       |   timeout CB  |       |               |

    stack                    apis                    callback                 microtask 
    
    
-> 5. Executes callback queue, since microtask is empty at this point

|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
| timeout CB    |       |promise handler|       |               |       |               |

    stack                    apis                    callback                 microtask 
   
   
   
|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |
| log('timeout')|       |promise handler|       |               |       |               |

    stack                    apis                    callback                 microtask     



|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|resolve('Hello')       |promise handler|       |               |       |               |

    stack                    apis                    callback                 microtask    
    
    
    
|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |  promise CB   |

    stack                    apis                    callback                 microtask  
    
    
|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|  promise CB   |       |               |       |               |       |               |

    stack                    apis                    callback                 microtask      
    
|               |       |               |       |               |       |               |      
|               |       |               |       |               |       |               |
|               |       |               |       |               |       |               |
|log('Hello')   |       |               |       |               |       |               |

    stack                    apis                    callback                 microtask     

*/
//--------------------------THE END -------------------------------------
// Thank you for reading this far. Keep learning. Keep growing.


