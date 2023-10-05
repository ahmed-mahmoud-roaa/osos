import Ui from './Ui'

export default function Message({ messageData, user }) {
  const handleEmoji = (reactions) => {
    const reactionsObject = { ...reactions }
    const newObject = {}
    for (const key in reactionsObject) {
      if (newObject[reactionsObject[key]]) {
        newObject[reactionsObject[key]].count =
          newObject[reactionsObject[key]].count + 1
        newObject[reactionsObject[key]].author = [
          ...newObject[reactionsObject[key]].author,
          key,
        ]
      } else {
        newObject[reactionsObject[key]] = { count: 1, author: [key] }
      }
    }
    return newObject
  }

  return <Ui messageData={messageData} user={user} handleEmoji={handleEmoji} />
}
