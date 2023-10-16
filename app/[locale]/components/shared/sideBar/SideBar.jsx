'use client'
import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { PiMagnifyingGlass, PiUserSquareLight } from 'react-icons/pi'
import Search from '../../elements/search/Search'
import LineTitle from '../../elements/lineTitle/LineTitle'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function SideBar() {
  const ChildrenRoutes = ({ routes }) => {
    return (
      <>
        {Object.keys(routes).map((child, index) => (
          <div key={index} onClick={() => routes[child].action()}>
            {routes[child].title}
          </div>
        ))}
      </>
    )
  }

  const ParentRoutes = ({ parentRoutes }) => {
    return (
      <>
        {Object.keys(parentRoutes).map((route, index) => (
          <div className="route" key={index}>
            {console.log(route, '00000000000')}
            <div className="icon">{parentRoutes[route].icon}</div>
            <div className="title">{parentRoutes[route].title}</div>
            <div className="arrow">
              {parentRoutes[route].type === 'parent' && (
                <HiOutlineChevronRight />
              )}
            </div>
            <div className="children">
              {<ChildrenRoutes routes={parentRoutes[route].children} />}
            </div>
          </div>
        ))}
      </>
    )
  }

  const levels = {
    type: 'basic',
    currentPanelPath: ['main'],
    panels: {
      main: {
        head: { title: 'Roaa Portal', icon: <BiHomeAlt2 />, search: true },
        topSections: {
          groupe: {
            dataModules: {
              title: 'DATA MODULES',
              //   count: 4,
              items: {
                humanResources: {
                  type: 'parent',
                  level: 1,
                  icon: <PiUserSquareLight />,
                  title: 'Human Resources',
                  path: [''],
                  children: {
                    itemOne: {
                      level: 2,
                      type: 'child',
                      title: 'itemOne',
                      icon: <PiUserSquareLight />,
                      action: () => {
                        console.log('weee')
                      },
                    },
                  },
                },
                taskManagement: {
                  type: 'parent',
                  level: 1,
                  icon: <PiUserSquareLight />,
                  title: 'Task Management',
                  path: [''],
                  children: {
                    itemOne: {
                      level: 2,
                      type: 'child',
                      title: 'itemOne',
                      icon: <PiUserSquareLight />,
                      action: () => {
                        console.log('weee')
                      },
                    },
                  },
                },
              },
            },
          },
        },
        bottomSections: {
          title: 'WORKSPACE',
          items: {
            level: 1,
            type: 'parent',
            icon: <HiOutlineUsers />,
            title: 'Access & Permissions',
            path: [''],
            children: {
              itemOne: {
                level: 2,
                type: 'child',
                title: 'itemOne',
                icon: <PiUserSquareLight />,
                action: () => {
                  console.log('')
                },
              },
            },
          },
        },
      },
    },
  }

  const currentPanel = levels.panels[levels.currentPanelPath[0]]
  return (
    <div className="relative w-[19.5rem] text-themeGray-700 border border-themeGray-200">
      <div className="head  p-4  flex items-center border-b border-themeGray-200">
        <div className="icon border border-themeGray-200 p-2 rounded-md mr-3 rtl:mr-0 rtl:ml-3 text-2xl">
          {currentPanel.head.icon}
        </div>
        <div className="title text-base font-semibold">
          {currentPanel.head.title}
        </div>
      </div>
      <div className="body p-4">
        <Search
          placeholder={'Search'}
          inputStyle={`bg-themeWhite-white py-2`}
          firstIcon={<PiMagnifyingGlass />}
        />
        <div className="routes">
          <div className="topSection">
            {Object.keys(currentPanel.topSections.groupe).map((item, index) => (
              <div className="groupe" key={index}>
                <div className="groupeTitle my-4 flex items-center">
                  <LineTitle
                    parentClass={'mb-0'}
                    content={currentPanel.topSections.groupe[item].title}
                  />
                  <button>+</button>
                </div>
                <div className="groupeRout">
                  <ParentRoutes
                    parentRoutes={currentPanel.topSections.groupe[item].items}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottomSection"></div>
    </div>
  )
}
