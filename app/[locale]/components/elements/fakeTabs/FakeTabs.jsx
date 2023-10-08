import React from 'react'

export default function FakeTabs({ currentCat, setCurrentCat, data }) {
  return (
    <div className="cat flex justify-between text-sm text-themeGray-700 border-b border-themeGray-200">
      {data.map((item, index) => (
        <button
          key={index}
          className={`pending pb-2 min-w-[5rem] ${
            index === currentCat &&
            'border-b border-primary-700 text-primary-700'
          }`}
          onClick={() => setCurrentCat(index)}
        >
          <span className="text">{item.text}</span>
          {item.count && parseInt(item.count) > 0 ? (
            <span
              className={`count py-0.5 px-1.5 ml-2 rtl:ml-0 rtl:mr-2 border rounded-full text-xs ${
                index === currentCat
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-themeGray-300 bg-themeGray-50'
              }`}
            >
              {item.count}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}
