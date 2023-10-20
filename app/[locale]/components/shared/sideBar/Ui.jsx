'use client'
import React, { useState } from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import Search from '../../elements/search/Search'
import LineTitle from '../../elements/lineTitle/LineTitle'
import { AiOutlinePlus } from 'react-icons/ai'
import ParentRoutes from './parentRoutes/ParentRoutes'
import ChildrenRoutes from './childRoutes/ChildRoutes'
import { FiArrowLeft } from 'react-icons/fi'

export default function Ui({ routeData }) {
  const [history, setHistory] = useState([])

  const goToTab = (index) => {
    setCurrentPanel([...history, currentPanel][index])
    setHistory(history.slice(0, index))
  }

  const goBack = () => {
    setCurrentPanel(history[history.length - 1])
    // setHistory(history.pop())
    // console.log(history, '999999999999', history.slice(0, -1))
    setHistory(history.slice(0, -1))
  }

  const [currentPanel, setCurrentPanel] = useState(routeData.panels['main'])

  const goToPanel = (path) => {
    console.log({ history }, '55')
    setHistory([...history, currentPanel])
    setCurrentPanel(routeData.panels[path])
  }
  const doSomeThing = (x) => {
    console.log('do some thing ', x)
  }

  const actions = {
    goToPanel: (x) => goToPanel(x),
    doSomeThing: (x) => doSomeThing(x),
  }

  function RouteGenerator({ routeGroupe }) {
    return Object.keys(routeGroupe).map((route, index) => (
      <div key={index}>
        {routeGroupe[route].type === 'parent' ? (
          <ParentRoutes
            key={index}
            parentRoutes={routeGroupe[route]}
            actions={actions}
          />
        ) : (
          <ChildrenRoutes childRoutes={routeGroupe[route]} actions={actions} />
        )}
      </div>
    ))
  }

  return (
    <div className="relative w-[19.5rem] text-themeGray-600 border border-themeGray-200">
      <div className="body h-full flex flex-col justify-between overflow-auto">
        <div className="upperSec">
          {routeData.type !== 'basic' ? (
            <div className="otherPanel">
              {[...history, currentPanel].map((panel, index) => (
                <div
                  className="panelTitle pt-3 pb-5 px-4 rounded-xl  text-themeGray-700 shadow-[0_-5px_7px_-2px_var(--themeGray-300)] mt-1 mb-[-2rem] relative z-10 overflow-hidden bg-primary-50 last:bg-themeWhite-white last:mb-[-1rem] first:rounded-sm first:mt-0 cursor-pointer last:cursor-default"
                  key={index}
                  onClick={() => goToTab(index)}
                >
                  {panel.head.title}
                </div>
              ))}
            </div>
          ) : (
            <div className="top  p-4  flex items-center border-b border-themeGray-200  text-themeGray-700">
              <div
                className="icon border border-themeGray-200 p-2 rounded-md mr-3 rtl:mr-0 rtl:ml-3 text-2xl cursor-pointer"
                onClick={() => (history.length > 0 ? goBack() : null)}
              >
                {history.length > 0 ? <FiArrowLeft /> : <BiHomeAlt2 />}
                {history.length}
              </div>
              <div className="title text-base font-semibold">
                {currentPanel.head.title}
              </div>
            </div>
          )}
          <div className="routes p-4">
            <Search
              placeholder={'Search'}
              inputStyle={`bg-themeWhite-white py-2`}
              firstIcon={<PiMagnifyingGlass />}
            />
            <div className="topSection">
              {Object.keys(currentPanel.topSections.groupe).map(
                (item, index) => (
                  <div className="groupe" key={index}>
                    <div className="groupeTitle my-4 flex items-center justify-between grow ">
                      <LineTitle
                        parentClass={
                          'mb-0 w-full font-semibold text-themeGray-500'
                        }
                        content={currentPanel.topSections.groupe[item].title}
                      />

                      <div className="p-2 border border-themeGray-200 rounded-md ml-2 rtl:mr-2 rtl:ml-0 text-lg  text-themeGray-500">
                        <AiOutlinePlus />
                      </div>
                    </div>
                    <div className="groupeRout">
                      <RouteGenerator
                        routeGroupe={
                          currentPanel.topSections.groupe[item].items
                        }
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="bottomSection border-t border-themeGray-200 px-4  my-4">
            {Object.keys(currentPanel.bottomSections.groupe).map(
              (item, index) => (
                <div className="groupe" key={index}>
                  <div className="groupeTitle pt-3 pb-1 flex items-center justify-between grow text-sm text-themeGray-500">
                    <div className="title mb-0 w-full font-semibold">
                      {currentPanel.bottomSections.groupe[item].title}
                    </div>
                  </div>
                  <div className="groupeRout">
                    <RouteGenerator
                      routeGroupe={
                        currentPanel.bottomSections.groupe[item].items
                      }
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
