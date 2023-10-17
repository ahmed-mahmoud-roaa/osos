'use client'
import React, { useState } from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import Search from '../../elements/search/Search'
import LineTitle from '../../elements/lineTitle/LineTitle'
import { AiOutlinePlus } from 'react-icons/ai'
import { LuUsers } from 'react-icons/lu'
import ParentRoutes from './parentRoutes/ParentRoutes'
import ChildrenRoutes from './childRoutes/ChildRoutes'

export default function SideBar() {
  const RouteGenerator = ({ routeGroupe }) => {
    return Object.keys(routeGroupe).map((route, index) => (
      <div key={index}>
        {routeGroupe[route].type === 'parent' ? (
          <ParentRoutes key={index} parentRoutes={routeGroupe[route]} />
        ) : (
          <ChildrenRoutes childRoutes={routeGroupe[route]} />
        )}
      </div>
    ))
  }

  const routeData = {
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
                  icon: <LuUsers />,
                  title: 'Human Resources',
                  path: [''],
                  children: {
                    itemOne: {
                      type: 'parent',
                      title: 'itemOne0000000',
                      icon: <LuUsers />,
                      children: {
                        itemTow: {
                          type: 'child',
                          title: 'itemOne1111111',
                          icon: <LuUsers />,
                          action: () => {
                            console.log('weee')
                          },
                        },
                      },
                    },
                  },
                },
                taskManagement: {
                  type: 'parent',
                  icon: <LuUsers />,
                  title: 'Task Management',
                  path: [''],
                  children: {
                    itemOne: {
                      type: 'child',
                      title: 'itemOne2233',
                      icon: <LuUsers />,
                      action: () => {
                        console.log('weee')
                      },
                    },
                  },
                },
                childRoute: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route',
                  action: () => {
                    console.log('weee')
                  },
                },
              },

              add: {
                title: 'add Module',
                action: () => {
                  console.log('0')
                },
              },
            },
            pages: {
              title: 'PAGES',
              //   count: 4,
              items: {
                childRoute: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route',
                  action: () => {
                    console.log('weee')
                  },
                },
                childRoute2: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route2',
                  action: () => {
                    console.log('weee')
                  },
                },
                childRoute3: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route3',
                  action: () => {
                    console.log('weee')
                  },
                },
              },

              add: {
                title: 'add page',
                action: () => {
                  console.log('0')
                },
              },
            },
          },
        },
        bottomSections: {
          groupe: {
            dataModules: {
              title: 'WORKSPACE',
              items: {
                accessPermission: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'Access & Permissions',
                  action: () => {
                    console.log('')
                  },
                },
                service: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service',
                  action: () => {
                    console.log('')
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  const currentPanel = routeData.panels[routeData.currentPanelPath[0]]
  return (
    <div className="relative w-[19.5rem] text-themeGray-600 border border-themeGray-200">
      <div className="body h-full flex flex-col justify-between overflow-auto">
        <div className="upperSec">
          <div className="top  p-4  flex items-center border-b border-themeGray-200">
            <div className="icon border border-themeGray-200 p-2 rounded-md mr-3 rtl:mr-0 rtl:ml-3 text-2xl">
              {currentPanel.head.icon}
            </div>
            <div className="title text-base font-semibold">
              {currentPanel.head.title}
            </div>
          </div>
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

                      <div
                        className="add flex items-center text-primary-600  font-semibold"
                        onClick={() =>
                          currentPanel.topSections.groupe[item].add.action()
                        }
                      >
                        <div className="icon p-2 text-2xl">
                          <AiOutlinePlus />
                        </div>
                        <div className="title">
                          {currentPanel.topSections.groupe[item].add.title}
                        </div>
                      </div>
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
