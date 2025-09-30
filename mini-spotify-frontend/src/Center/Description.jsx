import "./Description.css";
export default function Description({ song, author }) {
  return (
    <div
      className="description red-scroll-bar h-full flex-1 min-w-[500px] overflow-y-auto grow
        flex flex-col gap-[1.5rem]
      "
    >
      <div className="description-img-container w-full max-h-[521px] flex justify-center">
        <img
          alt="description-img"
          src={`mini-spotify/images/songPictures/${song.songImage}`}
          className="rounded-xl h-[521px] object-cover"
        ></img>
      </div>
      <div className="author-title w-full rounded-xl">
        <p className="title__paragraph font-bold">{song.songName}</p>
        <p className="aritst__name__paragraph font-bold">{author.author}</p>
      </div>

      <div className="description-about w-full rounded-xl ">
        <div className="about-artist-image-container rounded-tl-xl rounded-tr-xl overflow-hidden">
          <img
            alt="artist-image"
            src={`mini-spotify/images/authorPictures/${author.image}`}
            className="artist__image w-full  h-[200px] object-cover"
          />
        </div>
        <div className="about-artist-text-container flex flex-col gap-4">
          {" "}
          <div className="artist-name text-white font-bold">
            {song.songName}
          </div>
          <div className="artist-follow flex">
            <div className="followers flex-1 flex items-center">
              50000 right now follows
            </div>
            <div className="follow flex-1 flex justify-center">
              <button className="follow__button border-1 border-white rounded-full">
                {" "}
                Follow
              </button>
            </div>
          </div>
          <div className="artist-short-desc">{author.biograph}</div>
        </div>
        
      </div>
      <div className="credit-container bg-[var(--help-color2)] text-white rounded-xl
        flex flex-col justify-center items-center
      ">
        <p>CREDIT</p>
          <div className="font-thin">
            {song.credit}
          </div>
        </div>
    </div>
  );
}
