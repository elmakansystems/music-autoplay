const fetchApi = async () => {
        const api = await fetch(
          "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
        );
        const { tracks } = await api.json();
        return tracks;
      };
      const display = async () => {
        const data = await fetchApi();
        
        document.getElementById("music").innerHTML += Template(
          data[4].previewURL.replace("http", "https") , data[4].name );
        // data.map(
        //   (d) =>
        //     (document.getElementById("music").innerHTML += Template(
        //       d.previewURL.replace("http", "https") , d.name
        //     ))
        // );
      };

        display();
     
      

const Template = (src , head) => ` 
<div>
  <div class='music-container'>
    <div className='music-header'>
    <div class="header">
      <span>
        ${head}
      </span>
    </div>
    </div>
    <br/>
    <div class='music'>
      <audio src="${src}" autoplay loop controls></audio>
    </div>
  </div>
  <br/>
  <hr/>
</div>
      `;

