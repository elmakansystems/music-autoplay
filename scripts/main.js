// const fetchApi = async () => {
//         const api = await fetch(
//           "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
//         );
//         const { tracks } = await api.json();
//         return tracks;
//       };
//       const display = async () => {
//         const data = await fetchApi();
        
//         // document.getElementById("music").innerHTML += Template(
//         //   data[4].previewURL.replace("http", "https") , data[4].name );
//         // data.map(
//         //   (d) =>
//         //     (document.getElementById("music").innerHTML += Template(
//         //       d.previewURL.replace("http", "https") , d.name
//         //     ))
//         // );
//       };

//         // display();
     
      

//       const Template = (src , head) => ` 
// <div>
//   <div class='music-container'>
//     <div className='music-header'>
//     <div class="header">
//       <span>
//         ${head}
//       </span>
//     </div>
//     </div>
//     <br/>
//     <div class='music'>
//       <audio src="${src}" autoplay loop controls></audio>
//     </div>
//   </div>
//   <br/>
//   <hr/>
// </div>
//       `;


const root = document.getElementById("music")

const display = (data)=>{
    console.log(data);
    root.innerHTML += data.content
    applyAttrs(data.attrs)
}

// console.log(data());


const content = ()=>`
<header id="target"> 

    <center>

      <h1 class="name">this is inside the object</h1>

    </center>

</header>`

const data = ()=>{
    return{
        content : content(),
        attrs : [
            {"class" : "hello test name welcome"},
            {"data-attr" : "this is data attr"},
            {"id": "testid"}
        ],
        
    }
}


const applyAttrs = (attrs)=>{
    attrs.forEach((e, i) =>{
        let attr = Object.keys(e)
        let value = Object.values(e)
        let target = document.getElementById("target")
        if(target) target.setAttribute(attr , value)
        if(target) target.setAttribute("data-key" , i)
    }
)
}

display(data())