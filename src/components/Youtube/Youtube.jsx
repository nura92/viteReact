import React,{useState,useEffect} from 'react'

export default function Youtube() {
  const [Youtube, setYoutube]= useState([])
  useEffect(()=>{
fetch(' https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAaZhfWwmEAIObQpIfdnhO3GanB2QM8lX8')
.then((reponse)=> reponse.json()) 
.then((data)=> {
  console.log(data)
  setYoutube(data.items)
})
  },[])
  console.log(Youtube)
  return (
    <div className="allVideosWrapper">
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-12">
          <div className="title-wraper bold video-title-wrapper">
            Latest Videos
          </div>
        </div>
        {Youtube?.map((singleVideo, i) => {
          let vidId = singleVideo.id.videoId;
          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          let videoWrappers = (
            <div key={i} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank">
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
          return videoWrappers;
        })}

       
      </div>
    </div>
  </div>
  )
}
