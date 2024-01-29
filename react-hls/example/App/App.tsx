import React, { useState, useRef, useEffect } from 'react';

import HlsPlayer from '../../src';

function App() {
  const playerRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hlsUrl, setHlsUrl] = useState(
    // 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    'http://127.0.0.1:3001/0.m3u8'
  );
  const [destroy, setDestroy] = useState(false);

  function _handleEnter(e: React.KeyboardEvent) {
    if (e.keyCode === 13) {
      setHlsUrl(inputRef?.current?.value ?? '');
    }
  }

  function _handleDestroyClick() {
    setDestroy(true);
  }

  function _handleToggleControls() {
    if (playerRef?.current?.hasAttribute('controls')) {
      playerRef.current.removeAttribute('controls');
    } else {
      playerRef?.current?.setAttribute('controls', 'true');
    }
  }

  useEffect(() => {
    _handleToggleControls()
  }, [])

  return (
    <div>
      <div
        style={{
          margin: '0 0 20px',
        }}
      >
        <label
          style={{
            display: 'block',
            marginBottom: 10,
          }}
          htmlFor="url-input"
        >
          hls url :{' '}
        </label>
        <input
          ref={inputRef}
          id="url-input"
          type="text"
          defaultValue={hlsUrl}
          onKeyUp={_handleEnter}
          style={{
            width: '100%',
            height: '30px',
            lineHeight: '30px',
            fontSize: '16px',
            color: '#333',
          }}
        />
      </div>

      {!destroy ? (
        <HlsPlayer
          loop={true}
          width="100%"
          height="50"
          autoPlay
          playerRef={playerRef}
          src={hlsUrl}
        />
      ) : null}

      <br />

      <button
        style={{
          padding: '5px 10px',
        }}
        onClick={_handleDestroyClick}
      >
        Destroy Video
      </button>

      <button
        style={{
          padding: '5px 10px',
        }}
        onClick={_handleToggleControls}
      >
        Toggle Controls (via custom ref)
      </button>
    </div>
  );
}

export default App;
