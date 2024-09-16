// function getPos() {
//   const promise = new Promise((res, rej) => {
//     navigator.geolocation.getCurrentPosition(
//       (val) => {
//         res(val.coords);
//       },
//       (err) => {
//         rej(err);
//       }
//     );
//   });
//   return promise;
// }

// function timer(time) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Timer!!");
//     }, time);
//   });
//   return promise;
// }

// let pos;
// getPos().then((val)=> {
//     pos = val
//     return timer(5000)
// }).then((val)=> {
//     console.log(val,pos)
// }).catch((val)=> {
//     console.log(val)
// })

// async function getPosTimer() {
//     const res = await getPos();
//     const timer2 = await timer(3000);
//     // if(res.code == 1) {
//         throw new Error("Geo Error")
//     // }
// }

// getPosTimer().catch((err)=> {
//     console.log(err)
// })

// Promise.all()
// const ul = document.querySelector("ul");
// const btn = document.querySelector("button")
// function sendReq(method,url,post) {
//   const promise = new Promise((res, rej) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.responseType = "json"
//     xhr.onload = (eve) => {
//       console.log(eve);
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const data = xhr.response;
//         res(data);
//       } else {
//         rej("Something went Wrong?");
//       }
//     };

//     xhr.send(JSON.stringify(post))
//   });

//   return promise
// }

// async function sendReq(method) {
//  let res;
//  if(method=="get") {
//   res = await fetch('https://jsonplaceholder.org/posts')
//  } else {
//   res = await fetch("https://jsonplaceholder.org/posts",{
//     method,
//     body:JSON.stringify({title:"Hola!!"}),
//     headers:{
//       "Content-Type":"application/json"
//     }
//   })
//  }
//   if(!res.ok) {
//       throw new Error("Request Failed")
//   } else {
//     return await res.json()
//   }
// }


// async function render() {
//   const data = await sendReq("get")
//   for(const d of data) {
//     const li = document.createElement("li")
//     li.textContent = d.title
//     ul.append(li)
//   }
// }


// btn.addEventListener("click",()=> {
//   sendReq("post","https://jsonplaceholder.org/posts",{title:"Vanakam"})
// })

// render()