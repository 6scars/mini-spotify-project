import "./Music.css";
export default function Music({
  songs,
  authors,
  setSong,
  setAuthor,
  setShow,
  latest,
  setLatest,
}) {
  function chooseSong(e) {
    const findedSong = songs.find((song) => song.id === e);
    const findedAuthor = authors.find(
      (author) => author.id === findedSong.authors[0]
    );
    setSong(findedSong);
    setAuthor(findedAuthor);
    setShow(true);
    latestListened(findedSong);

    console.log(latest);
  }

  function latestListened(newSong) {
    if (!latest) setLatest([newSong]);

    const index = latest.findIndex((s) => s.id === newSong.id);

    setLatest((prev) => {
      /*if NOT finded song in previous*/
      if (index === -1) {
        /*if NOT finded song and length equals 6*/
        if (prev.length === 6) {
          const newArray = [...prev]
          newArray.pop()
          return [newSong, ...newArray];
        }
        return [newSong, ...prev];
        /*if finded song in previous*/
      } else {
        /*if finded song and length equals 6*/
        if (prev.length === 6) {
          const newArray = [...prev];
          newArray.splice(index, 1);
          newArray.pop()
          return [newSong, ...newArray];
        }
      
          const newArray = [...prev];
          newArray.splice(index, 1);
          return [newSong, ...newArray];
        
      }
    });

  }

  return (
    <div
      className="music red-scroll-bar space-y-4 bg-[#232323] flex-[2] h-full min-w-[500px] overflow-y-auto  rounded-md
          relative
        "
    >
      <div
        className="main-type w-full bg-gray-500 sticky top-0 
            flex gap-10"
      >
        <button>MUSIC</button>
        <button>PODCASTS</button>
      </div>
      <div className="main-songs ">
        <div className="play-lists gap-2 grid grid-cols-3">
          {latest.map((l) => {
            return (
              <div key={l.id} className="playlist ">
                <div className="playlist-image-container">
                  <img
                    className="playlist__image"
                    src={`mini-spotify/images/songPictures/${l.songImage}`}
                  ></img>
                </div>
                <div className="playlist-title-container">
                  <p className="playlist__title">{l.songName}</p>
                </div>
              </div>
            );
          })}
        </div>

        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div key={i} className="songs cursor-pointer">
              <div className="songs-title-container text-white font-bold">
                <p className="songs__title">Preapared for You</p>
              </div>
              <div className="songs-container red-scroll-bar h-full">
                {songs.map((song) => {
                  return (
                    <div
                      onClick={() => {
                        chooseSong(song.id);
                      }}
                      key={song.id}
                      className="song-container-outer bg-transparent flex justify-center"
                    >
                      <div className="song-container-inner  rounded-xl ">
                        <div className="song-image-container h-[75%] ">
                          <img
                            className="song__image"
                            src={`mini-spotify/images/songPictures/${song.songImage}`}
                          ></img>
                        </div>
                        <div className="authors-container  h-[25%] text-gray-700 font-bold flex items-center">
                          <p className="authors__text ">
                            Oliver Francis, XXXtentacions
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
