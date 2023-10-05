import React from 'react'

export default function Ui({ show, addEmoji, emojisArray }) {
  return (
    <>
      {show && (
        <div className="absolute z-40 bg-themeGray-50 p-2 rounded-full text-3xl">
          {emojisArray.map((emo, index) => (
            <button key={index} onClick={() => addEmoji(emo)}>
              {emo}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
