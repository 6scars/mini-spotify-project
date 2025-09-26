import "./PlayRightSection.css";

export default function PlayRightSection({ volume, handleVolume, muted,  handleMute }) {

  function changeVolume(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const prc = (e.clientX - rect.left) / rect.width;
    handleVolume(prc);
  }

  return (
    <div
      className="play-right-section h-full w-[300px] min-[150px]
       flex justify-center items-center"
    >
      <div className="volume-container w-full h-full flex items-center gap-5">
        <div className="volume-icon-container">
          <img
            className="cursor-pointer"
            onClick={handleMute}
            alt="speaker-volume"
            src={`/mini-spotify/images/logos/speaker${muted ? 'Crossed' : ''}Song.svg`}
          />
        </div>
        <div
          onClick={(event) => {
            changeVolume(event);
          }}
          className="volume w-full bg-[var(--help-color2)] h-[10px] rounded-md overflow-hidden"
        >
          <div
            style={{ width: `${volume * 100}%` }}
            className="h-full bg-white"
          ></div>
          
        </div>
        <div className="volume__text text-red-500">{volume.toFixed(2)}</div>
      </div>
    </div>
  );
}
