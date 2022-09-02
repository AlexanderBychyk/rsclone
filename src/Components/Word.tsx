import React, { useState } from 'react';
import { IWord } from '../Interfaces/gameInterfaces';
import { URL } from '../enums/enums';

function MeaningComponent({ str }: { str: string }) {
  const start = str.indexOf('<');
  const end = str.lastIndexOf('>');

  return (
    <div>
      {str.slice(0, start)}
      <i>{str.slice(start + 3, end - 3)}</i>
      {str.slice(end + 1, str.length)}
    </div>
  );
}

function ExampleComponent({ str }: { str: string }) {
  const start = str.indexOf('<');
  const end = str.lastIndexOf('>');

  return (
    <div>
      {str.slice(0, start)}
      <b>{str.slice(start + 3, end - 3)}</b>
      {str.slice(end + 1, str.length)}
    </div>
  );
}

function Word({
  word,
  image,
  audio,
  audioMeaning,
  audioExample,
  textMeaning,
  textExample,
  transcription,
  wordTranslate,
  textMeaningTranslate,
  textExampleTranslate,
}: IWord) {
  const [audioPlayer, setAudioPlayer] = useState(false);

  function playAudio(audioArray: [string, string, string]) {
    setAudioPlayer(true);
    const player = new Audio();
    player.volume = 1;
    let current = 0;
    player.src = `${URL.start}/${audioArray[0]}`;
    player.play();
    player.addEventListener('ended', () => {
      if (current === 2) {
        setAudioPlayer(false);
        player.removeEventListener('ended', () => {
        });
      }
      current += 1;
      player.src = `${URL.start}/${audioArray[current]}`;
      player.play();
    });
  }
  const volume = {
    fill: 'grey',
  };

  const volumeActive = {
    fill: 'brown',
  };

  return (
    <div className="word__wrapper">
      <div className="word__content">
        <img src={`${URL.start}/${image}`} alt="word__image" className="word__img" />
        <div className="word__description">
          <div className="word__header">
            <p className="word__title">
              <span className="word__name">{word}</span>
              <span className="word__transcription">{transcription}</span>
              <span className="word__translate">{wordTranslate}</span>
            </p>
            <button
              type="button"
              className="volume__btn button__video"
              onClick={() => {
                playAudio([audio, audioMeaning, audioExample]);
              }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                style={audioPlayer ? volumeActive : volume}
                viewBox="0 0 36 36"
              >
                <title>volume</title>
                <path
                  d="M17.995 2.95c-0.429 0-0.801 0.157-1.115 0.471l-8.248 8.248h-6.489c-0.43 0-0.801 0.157-1.115 0.471s-0.471 0.686-0.471 1.115v9.51c0 0.429 0.157 0.801 0.471 1.115s0.686 0.471 1.115 0.471h6.489l8.248 8.248c0.314 0.314 0.685 0.471 1.115 0.471s0.801-0.157 1.115-0.471 0.471-0.685 0.471-1.115v-26.948c0-0.429-0.157-0.801-0.47-1.115s-0.685-0.471-1.115-0.471z"
                />
                <path
                  d="M28.040 21.515c0.702-1.081 1.053-2.249 1.053-3.505s-0.351-2.428-1.053-3.518c-0.702-1.090-1.63-1.858-2.787-2.304-0.165-0.082-0.372-0.124-0.619-0.124-0.429 0-0.801 0.153-1.115 0.458-0.314 0.307-0.471 0.681-0.471 1.127 0 0.347 0.099 0.64 0.298 0.879s0.437 0.446 0.718 0.619c0.28 0.173 0.561 0.363 0.842 0.57s0.52 0.499 0.718 0.879c0.198 0.38 0.297 0.851 0.297 1.412s-0.099 1.032-0.297 1.412c-0.198 0.38-0.437 0.673-0.718 0.879s-0.562 0.397-0.842 0.57c-0.281 0.173-0.52 0.38-0.718 0.619s-0.298 0.533-0.298 0.879c0 0.446 0.158 0.821 0.471 1.127 0.314 0.304 0.685 0.459 1.115 0.459 0.247 0 0.454-0.041 0.619-0.124 1.156-0.463 2.085-1.235 2.787-2.317z"
                />
                <path
                  d="M33.327 25.008c1.404-2.137 2.106-4.471 2.106-6.999 0-2.527-0.702-4.859-2.106-6.999-1.404-2.137-3.262-3.695-5.573-4.669-0.214-0.082-0.429-0.124-0.644-0.124-0.429 0-0.801 0.157-1.115 0.471s-0.47 0.685-0.47 1.115c0 0.644 0.322 1.131 0.966 1.462 0.924 0.479 1.552 0.842 1.882 1.090 1.222 0.892 2.176 2.010 2.861 3.356s1.028 2.778 1.028 4.299c0 1.519-0.343 2.952-1.028 4.299-0.685 1.346-1.639 2.464-2.861 3.356-0.33 0.248-0.958 0.611-1.882 1.090-0.644 0.331-0.966 0.817-0.966 1.462 0 0.429 0.157 0.801 0.47 1.115s0.693 0.471 1.139 0.471c0.198 0 0.405-0.042 0.619-0.124 2.311-0.975 4.17-2.531 5.573-4.67z"
                />
              </svg>
            </button>
          </div>
          <div className="word__meaning__wrapper">
            <p className="word__meaning">
              <MeaningComponent str={textMeaning} />
            </p>
            <p className="word__meaning__translate">{textMeaningTranslate}</p>
          </div>
          <div className="word__example__wrapper">
            <p className="word__example">
              <ExampleComponent str={textExample} />
            </p>
            <p className="word__example__translate">{textExampleTranslate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Word;
