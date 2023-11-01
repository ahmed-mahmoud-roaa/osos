import React, { useState } from 'react'
import { HiOutlineUsers } from 'react-icons/hi'

import { AiOutlinePlus } from 'react-icons/ai'
import { LuUsers } from 'react-icons/lu'

import Ui from './Ui'

export default function SideBar() {
  const routeData = {
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
                          action: ['doSomeThing', ['0000']],
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
                      action: ['goToPanel', ['HR']],
                    },
                  },
                },
                childRoute: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route',
                  action: ['doSomeThing', ['00000']],
                },
                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: ['doSomeThing', ['00000']],
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
                  action: ['doSomeThing', ['00000']],
                },
                childRoute2: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route2',
                  action: ['doSomeThing', ['00000']],
                },
                childRoute3: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route3',
                  action: ['doSomeThing', ['00000']],
                },
                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: ['doSomeThing', ['00000']],
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
                  action: ['doSomeThing', ['00000']],
                },
                service: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service1',
                  action: ['doSomeThing', ['00000']],
                },
                service2: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service2',
                  action: ['doSomeThing', ['00000']],
                },
                service3: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service3',
                  action: ['doSomeThing', ['00000']],
                },
              },
            },
          },
        },
      },
      HR: {
        head: { title: 'Level 1', search: true },
        topSections: {
          groupe: {
            pages: {
              title: 'HR',
              //   count: 4,
              items: {
                childRoute: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'third',
                  action: ['goToPanel', ['third']],
                },
                childRoute1: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child rout00000',
                  action: ['doSomeThing', ['00000']],
                },
                childRoute2: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route2',
                  action: ['doSomeThing', ['00000']],
                },
                childRoute3: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route3',
                  action: ['doSomeThing', ['00000']],
                },

                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: ['doSomeThing', ['00000']],
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
                  action: ['doSomeThing', ['00000']],
                },
                service: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service',
                  action: ['doSomeThing', ['00000']],
                },
              },
            },
          },
        },
      },
      third: {
        head: { title: 'Level 2', search: true },
        topSections: {
          groupe: {
            pages: {
              title: 'third',
              //   count: 4,
              items: {
                childRoute2: {
                  type: 'got to forth',
                  icon: <LuUsers />,
                  title: 'child route2',
                  action: ['goToPanel', ['forth']],
                },

                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: ['doSomeThing', ['00000']],
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
                  action: ['doSomeThing', ['00000']],
                },
                service: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service',
                  action: ['doSomeThing', ['00000']],
                },
              },
            },
          },
        },
      },
      forth: {
        head: { title: 'Level 2', search: true },
        topSections: {
          groupe: {
            pages: {
              title: 'forth',
              //   count: 4,
              items: {
                childRoute2: {
                  type: 'child',
                  icon: <LuUsers />,
                  title: 'child route2',
                  action: ['doSomeThing', ['00000']],
                },

                add: {
                  type: 'child',
                  active: true,
                  icon: <AiOutlinePlus />,
                  title: 'add Module',
                  action: ['doSomeThing', ['00000']],
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
                  action: ['doSomeThing', ['00000']],
                },
                service: {
                  type: 'child',
                  icon: <HiOutlineUsers />,
                  title: 'service',
                  action: ['doSomeThing', ['00000']],
                },
              },
            },
          },
        },
      },
    },
  }

  return <Ui routeData={routeData} />
}
