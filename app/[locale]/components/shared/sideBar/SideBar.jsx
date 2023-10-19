// import React, { useState } from 'react'
// import { HiOutlineUsers } from 'react-icons/hi'

// import { AiOutlinePlus } from 'react-icons/ai'
// import { LuUsers } from 'react-icons/lu'

// import Ui from './Ui'

// export default function SideBar() {
//   const routeData = {
//     type: 'basic',
//     type: 'tabs',
//     panels: {
//       main: {
//         head: { title: 'Roaa Portal', search: true },
//         topSections: {
//           groupe: {
//             dataModules: {
//               title: 'DATA MODULES',
//               //   count: 4,
//               items: {
//                 humanResources: {
//                   type: 'parent',
//                   icon: <LuUsers />,
//                   title: 'Human Resources',
//                   children: {
//                     itemOne: {
//                       type: 'parent',
//                       title: 'itemOne0000000',
//                       icon: <LuUsers />,
//                       children: {
//                         itemTow: {
//                           type: 'child',
//                           title: 'itemOne1111111',
//                           icon: <LuUsers />,
//                           action: () => {
//                             console.log('weee')
//                           },
//                         },
//                       },
//                     },
//                   },
//                 },
//                 taskManagement: {
//                   type: 'parent',
//                   icon: <LuUsers />,
//                   title: 'Task Management',
//                   children: {
//                     itemOne: {
//                       type: 'child',
//                       title: 'goToNewPanel',
//                       icon: <LuUsers />,
//                       action: () => {
//                         goToPanel('HR')
//                       },
//                     },
//                   },
//                 },
//                 childRoute: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 add: {
//                   type: 'child',
//                   active: true,
//                   icon: <AiOutlinePlus />,
//                   title: 'add Module',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//               },
//             },
//             pages: {
//               title: 'PAGES',
//               //   count: 4,
//               items: {
//                 childRoute: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 childRoute2: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route2',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 childRoute3: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route3',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 add: {
//                   type: 'child',
//                   active: true,
//                   icon: <AiOutlinePlus />,
//                   title: 'add Module',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//               },
//             },
//           },
//         },
//         bottomSections: {
//           groupe: {
//             dataModules: {
//               title: 'WORKSPACE',
//               items: {
//                 accessPermission: {
//                   type: 'child',
//                   icon: <HiOutlineUsers />,
//                   title: 'Access & Permissions',
//                   action: () => {
//                     console.log('')
//                   },
//                 },
//                 service: {
//                   type: 'child',
//                   icon: <HiOutlineUsers />,
//                   title: 'service2',
//                   action: () => {
//                     console.log('')
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       HR: {
//         head: { title: 'second panel', search: true },
//         topSections: {
//           groupe: {
//             pages: {
//               title: 'HR',
//               //   count: 4,
//               items: {
//                 childRoute: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 childRoute2: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route2',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//                 childRoute3: {
//                   type: 'child',
//                   icon: <LuUsers />,
//                   title: 'child route3',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },

//                 add: {
//                   type: 'child',
//                   active: true,
//                   icon: <AiOutlinePlus />,
//                   title: 'add Module',
//                   action: () => {
//                     console.log('weee')
//                   },
//                 },
//               },
//             },
//           },
//         },
//         bottomSections: {
//           groupe: {
//             dataModules: {
//               title: 'WORKSPACE',
//               items: {
//                 accessPermission: {
//                   type: 'child',
//                   icon: <HiOutlineUsers />,
//                   title: 'Access & Permissions',
//                   action: () => {
//                     console.log('')
//                   },
//                 },
//                 service: {
//                   type: 'child',
//                   icon: <HiOutlineUsers />,
//                   title: 'service',
//                   action: () => {
//                     console.log('')
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   }

//   const [history, setHistory] = useState([])

//   const goToTab = (index) => {
//     setCurrentPanel([...history, currentPanel][index])
//     setHistory(history.slice(0, index))
//   }

//   const goBack = () => {
//     setCurrentPanel(history[history.length - 1])
//     setHistory(history.pop())
//   }

//   const [currentPanel, setCurrentPanel] = useState(routeData.panels['main'])

//   const goToPanel = (path) => {
//     setHistory([...history, currentPanel])
//     setCurrentPanel(routeData.panels[path])
//   }

//   return (
//     <Ui
//       routeData={routeData}
//       currentPanel={currentPanel}
//       goToTab={goToTab}
//       goBack={goBack}
//       history={history}
//     />
//   )
// }

'use client'
import React, { use, useState } from 'react'
import { HiOutlineUsers } from 'react-icons/hi'

import { AiOutlinePlus } from 'react-icons/ai'
import { LuUsers } from 'react-icons/lu'

import Ui from './Ui'

// const getPosts = async () => {
//   const data = await fetch('https://httpbin.org/get')
//   const posts = await data.json()
//   return posts
// }

export default function SideBar() {
  const routeData = {
    type: 'basic',
    type: 'tabs',
    panels: {
      main: {
        head: { title: 'Roaa Portal', search: true },
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
                  children: {
                    itemOne: {
                      type: 'child',
                      title: 'goToNewPanel',
                      icon: <LuUsers />,
                      action: () => {
                        goToPanel('HR')
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
                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: () => {
                    console.log('weee')
                  },
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
                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: () => {
                    console.log('weee')
                  },
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
                  title: 'service2',
                  action: () => {
                    console.log('')
                  },
                },
              },
            },
          },
        },
      },
      HR: {
        head: { title: 'second panel', search: true },
        topSections: {
          groupe: {
            pages: {
              title: 'HR',
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

                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: () => {
                    console.log('weee')
                  },
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

  const [history, setHistory] = useState([])

  const goToTab = (index) => {
    setCurrentPanel([...history, currentPanel][index])
    setHistory(history.slice(0, index))
  }

  const goBack = () => {
    setCurrentPanel(history[history.length - 1])
    setHistory(history.pop())
  }

  const [currentPanel, setCurrentPanel] = useState(routeData.panels['main'])

  const goToPanel = (path) => {
    setHistory([...history, currentPanel])
    setCurrentPanel(routeData.panels[path])
  }

  // const posts = use(getPosts())

  return (
    <>
      <Ui
        routeData={routeData}
        currentPanel={currentPanel}
        goToTab={goToTab}
        goBack={goBack}
        history={history}
      />
      {/* {posts.url} 555555555 */}
    </>
  )
}
