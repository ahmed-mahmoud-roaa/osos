export const sideBarData = {
  main: {
    head: { title: { ar: 'Roaa Portal', en: 'Roaa Portal' }, search: true },
    topSections: {
      groupe: {
        dataModules: {
          title: { ar: 'DATA MODULES', en: 'DATA MODULES' },

          items: {
            taskManagement: {
              type: 'parent',
              icon: 'LuUsers',
              title: {
                ar: 'Task Management',
                en: 'Task Management',
              },
              children: {
                itemOne: {
                  type: 'child',
                  title: {
                    ar: 'goToNewPanel',
                    en: 'goToNewPanel',
                  },
                  icon: 'LuUsers',
                  action: ['goToPanel', ['HR']],
                },
              },
            },
            humanResources: {
              type: 'parent',
              icon: 'LuUsers',
              title: { ar: 'Human Resources', en: 'Human Resources' },
              children: {
                itemOne: {
                  type: 'parent',
                  title: {
                    ar: 'subItem',
                    en: 'subItem',
                  },
                  icon: 'LuUsers',
                  children: {
                    itemTow: {
                      type: 'child',
                      title: {
                        ar: 'SubSubItem',
                        en: 'SubSubItem',
                      },
                      icon: 'LuUsers',
                      action: ['doSomeThing', ['0000']],
                    },
                  },
                },
              },
            },

            childRoute: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route',
                en: 'child route',
              },
              action: ['doSomeThing', ['00000']],
            },
            add: {
              type: 'child',
              active: true,
              icon: 'AiOutlinePlus',
              title: {
                ar: 'add Module',
                en: 'add Module',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
        pages: {
          title: {
            ar: 'PAGES',
            en: 'PAGES',
          },

          items: {
            childRoute: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route',
                en: 'child route',
              },
              action: ['doSomeThing', ['00000']],
            },
            childRoute2: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route2',
                en: 'child route2',
              },
              action: ['doSomeThing', ['00000']],
            },
            childRoute3: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route3',
                en: 'child route3',
              },
              action: ['doSomeThing', ['00000']],
            },
            add: {
              type: 'child',
              active: true,
              icon: 'AiOutlinePlus',
              title: {
                ar: 'add Module',
                en: 'add Module',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
    bottomSections: {
      groupe: {
        dataModules: {
          title: {
            ar: 'WORKSPACE',
            en: 'WORKSPACE',
          },
          items: {
            accessPermission: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'Access & Permissions',
                en: 'Access & Permissions',
              },
              action: ['doSomeThing', ['00000']],
            },
            service: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service1',
                en: 'service1',
              },
              action: ['doSomeThing', ['00000']],
            },
            service2: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service2',
                en: 'service2',
              },
              action: ['doSomeThing', ['00000']],
            },
            service3: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service3',
                en: 'service3',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
  },
  HR: {
    head: {
      title: {
        ar: 'Level 1',
        en: 'Level 1',
      },
      search: true,
    },
    topSections: {
      groupe: {
        pages: {
          title: {
            ar: 'HR',
            en: 'HR',
          },

          items: {
            childRoute: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'third',
                en: 'third',
              },
              action: ['goToPanel', ['third']],
            },
            childRoute1: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child rout00000',
                en: 'child rout00000',
              },
              action: ['doSomeThing', ['00000']],
            },
            childRoute2: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route2',
                en: 'child route2',
              },
              action: ['doSomeThing', ['00000']],
            },
            childRoute3: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route3',
                en: 'child route3',
              },
              action: ['doSomeThing', ['00000']],
            },

            add: {
              type: 'child',
              active: true,
              icon: 'AiOutlinePlus',
              title: {
                ar: 'add Module',
                en: 'add Module',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
    bottomSections: {
      groupe: {
        dataModules: {
          title: {
            ar: 'WORKSPACE',
            en: 'WORKSPACE',
          },
          items: {
            accessPermission: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'Access & Permissions',
                en: 'Access & Permissions',
              },
              action: ['doSomeThing', ['00000']],
            },
            service: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service',
                en: 'service',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
  },
  third: {
    head: {
      title: {
        ar: 'Level 2',
        en: 'Level 2',
      },
      search: true,
    },
    topSections: {
      groupe: {
        pages: {
          title: {
            ar: 'third',
            en: 'third',
          },

          items: {
            childRoute2: {
              type: 'got to forth',
              icon: 'LuUsers',
              title: 'child route2',
              action: ['goToPanel', ['forth']],
            },

            add: {
              type: 'child',
              active: true,
              icon: 'AiOutlinePlus',
              title: {
                ar: 'add Module',
                en: 'add Module',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
    bottomSections: {
      groupe: {
        dataModules: {
          title: {
            ar: 'WORKSPACE',
            en: 'WORKSPACE',
          },
          items: {
            accessPermission: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'Access & Permissions',
                en: 'Access & Permissions',
              },
              action: ['doSomeThing', ['00000']],
            },
            service: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service',
                en: 'service',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
  },
  forth: {
    head: {
      title: {
        ar: 'Level 2',
        en: 'Level 2',
      },
      search: true,
    },
    topSections: {
      groupe: {
        pages: {
          title: {
            ar: 'forth',
            en: 'forth',
          },

          items: {
            childRoute2: {
              type: 'child',
              icon: 'LuUsers',
              title: {
                ar: 'child route2',
                en: 'child route2',
              },
              action: ['doSomeThing', ['00000']],
            },

            add: {
              type: 'child',
              active: true,
              icon: 'AiOutlinePlus',
              title: {
                ar: 'add Module',
                en: 'add Module',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
    bottomSections: {
      groupe: {
        dataModules: {
          title: {
            ar: 'WORKSPACE',
            en: 'WORKSPACE',
          },
          items: {
            accessPermission: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'Access & Permissions',
                en: 'Access & Permissions',
              },
              action: ['doSomeThing', ['00000']],
            },
            service: {
              type: 'child',
              icon: 'HiOutlineUsers',
              title: {
                ar: 'service',
                en: 'service',
              },
              action: ['doSomeThing', ['00000']],
            },
          },
        },
      },
    },
  },
}
