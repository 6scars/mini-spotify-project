import "./Aside.css";
import playlists from "../../public/data/playlists.json"
export default function Aside({show}) {
  const choosePlaylist = (playlistId)=>{  
    console.log(playlistId)
  }
  console.log(show)
  
  return (
    <aside
      className={`leftBar red-scroll-bar fixed top-[89px] bottom-[0px] bg-gray-900 rounded-xl
            flex flex-col items-center gap-[10px] 
            overflow-y-auto
            ${show ? 'show' : ''}`}
    >
      {playlists.map((playlist) => (
        <div
            key={playlist.id}
            onClick={()=>{choosePlaylist(playlist.id)}}
          className="playlists-container bg-red-700 w-[75%] h-[150px] cursor-pointer
            flex flex-col
            "
        >
          <div className="img-container h-[70px]">
            <img
              alt="playlist"
              src="mini-spotify/images/songPictures/cat1.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="playlist-paragraph-container w-full">
            <p className="playlist__paragraph text-white text-[12px] font-bold text-bold text-center w-full">
              {playlist.name}
              </p>
            
            
          </div>
        </div>
      ))}
    </aside>
  );
}
