export const dotesColor = (count) => {
  if (count == 1) {
    return 'var(--themeGreen-400)'
  } else if (count == 2) {
    return 'var(--primary-300)'
  } else if (count == 3) {
    return 'var(--themeOrange-500)'
  }
}

export const dotesRender = (count, max = 3) => {
  count = parseInt(count)

  const dotsArray = []

  for (let i = 0; i < max; i++) {
    dotsArray.push(
      <div
        className="w-1.5 h-1.5 m-0.5 rounded-full"
        style={{
          background: i < count ? dotesColor(count) : 'var(--themeGray-300)',
        }}
      ></div>
    )
  }

  return dotsArray
}
