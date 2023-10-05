import React from 'react'
import Ui from './Ui'
export default function MessageReact({ show, emoji, setEmoji }) {
  const emojisArray = ['🧡', '😂', '😊', '👍', '👎']
  const addEmoji = (emo) => {
    if (emo === emoji.you) {
      delete emoji.you
    } else {
      setEmoji({ ...emoji, you: emo })
    }
  }
  return <Ui show={show} addEmoji={addEmoji} emojisArray={emojisArray} />
}
