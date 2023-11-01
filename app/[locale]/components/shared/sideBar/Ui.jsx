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
import Accordion from '../../elements/accordion/Accordion'
import { BsThreeDots } from 'react-icons/bs'
import { Wrapper } from './SideBar.styled'
import { useSelector } from 'react-redux'

let oldHistory = []
export default function Ui({ routeData }) {
  const [history, setHistory] = useState([])

  const [more, setMore] = useState('more')
  const interfaceState = useSelector((state) => state.main.interface)

  const goToTab = (index) => {
    setTimeout(() => {
      setCurrentPanel([...history, currentPanel][index])
      setHistory(history.slice(0, index))
    }, 300)
  }

  const goBack = () => {
    setCurrentPanel(history[history.length - 1])
    setHistory(history.slice(0, -1))
  }

  const [currentPanel, setCurrentPanel] = useState(routeData.panels['main'])

  const goToPanel = (path) => {
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

  function RouteGenerator({ routeGroupe, more, setMore }) {
    // const
    const routes =
      Object.keys(routeGroupe).length < 2 || more == 'more'
        ? Object.keys(
            Object.fromEntries(Object.entries(routeGroupe).slice(0, 1))
          )
        : Object.keys(routeGroupe)

    const moreComponent = Object.keys(routeGroupe).length > 2 && (
      <span onClick={() => setMore(more === 'more' ? 'less' : 'more')}>
        <ChildrenRoutes
          childRoutes={{
            icon: <BsThreeDots />,
            title: more == 'more' ? 'More' : 'Less',
          }}
        />
      </span>
    )
    const routeRender = routes.map((route, index) => (
      <div key={index}>
        {routeGroupe[route].type === 'parent' ? (
          <ParentRoutes parentRoutes={routeGroupe[route]} actions={actions} />
        ) : (
          <ChildrenRoutes childRoutes={routeGroupe[route]} actions={actions} />
        )}
      </div>
    ))

    return more ? [...routeRender, moreComponent] : routeRender
  }
  const allTabs = [...history, currentPanel]

  function SingleSide({ currentPanel, index = 0 }) {
    const [hideClass, setHideClass] = useState()
    const [down, setDown] = useState(
      allTabs.length < oldHistory.length || index < oldHistory.length
        ? '0'
        : '-100%'
    )

    if (index == allTabs.length - 1) {
      oldHistory = allTabs
    }

    const hideNext = () => {
      setHideClass('remove')
      setTimeout(() => {
        setHideClass('')
      }, 1000)
    }
    setTimeout(() => {
      setDown('0')
    }, 10)
    return (
      <Wrapper
        className={`w-[19.5rem] text-themeGray-600 border border-themeGray-200 bg-themeWhite-white side-${index} transition-all duration-300 cursor-pointer ${hideClass}`}
        count={history.length}
        index={index}
        type={interfaceState}
        down={down}
      >
        <div className="body h-full flex flex-col justify-between overflow-auto">
          <div className="upperSec">
            {interfaceState !== 'Comfy' ? (
              <div className="otherPanel">
                <div
                  className="panelTitle pt-4 px-4 rounded-xl font-bold text-themeGray-700 relative z-10 overflow-hidden"
                  key={index}
                  onClick={() => {
                    goToTab(index)
                    hideNext()
                  }}
                >
                  {currentPanel.head.title}
                </div>
              </div>
            ) : (
              <div className="top  p-4  flex items-center border-b border-themeGray-200  text-themeGray-700">
                <div
                  className="icon border border-themeGray-200 p-2 rounded-md mr-3 rtl:mr-0 rtl:ml-3 text-2xl cursor-pointer"
                  onClick={() => (history.length > 0 ? goBack() : null)}
                >
                  {history.length > 0 ? <FiArrowLeft /> : <BiHomeAlt2 />}
                </div>
                <div className="title text-base font-semibold">
                  {currentPanel.head.title}
                </div>
              </div>
            )}
            <div className="routes p-4">
              <Search
                placeholder={'Search'}
                inputStyle={`bg-themeWhite-white py-2.5 text-base`}
                firstIcon={
                  <span className="text-base">
                    <PiMagnifyingGlass />
                  </span>
                }
              />
              <div className="topSection">
                {Object.keys(currentPanel.topSections.groupe).map(
                  (item, index) => (
                    <div className="groupe" key={index}>
                      <Accordion
                        className={'flex-row-reverse'}
                        head={
                          <div className="groupeTitle my-0 flex items-center  justify-between grow ">
                            <LineTitle
                              parentClass={
                                'mb-0 w-full font-semibold text-themeGray-500'
                              }
                              content={
                                <>
                                  {currentPanel.topSections.groupe[item].title}
                                  <span className="py-0.5 px-1.5 bg-themeGray-50 text-themeGreen-700 border border-themeGray-200 rounded-full ml-2 rtl:ml-0 rtl:mr-2 font-medium text-xs">
                                    {Object.keys(
                                      currentPanel.topSections.groupe[item]
                                        .items
                                    ).length - 1}
                                  </span>
                                </>
                              }
                            />

                            <div className="p-2 border border-themeGray-200 rounded-md ml-2 rtl:mr-2 rtl:ml-0 text-lg  text-themeGray-700">
                              <AiOutlinePlus />
                            </div>
                          </div>
                        }
                        body={
                          <div className="groupeRout">
                            <RouteGenerator
                              routeGroupe={
                                currentPanel.topSections.groupe[item].items
                              }
                            />
                          </div>
                        }
                      />
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
                        more={more}
                        setMore={setMore}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
    <div className="w-[19.5rem] overflow-hidden h-full relative">
      {interfaceState === 'Comfy' ? (
        <SingleSide currentPanel={currentPanel} />
      ) : (
        <>
          {allTabs.map((historyCard, index) => {
            return (
              <SingleSide
                key={index}
                currentPanel={historyCard}
                index={index}
              />
            )
          })}
        </>
      )}
    </div>
  )
}
