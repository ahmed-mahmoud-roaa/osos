import React from 'react'
import { FiUser } from 'react-icons/fi'
import { LuUsers } from 'react-icons/lu'
import Ui from './Ui'

export default function SearchResult() {
  const data = {
    home: {
      info: {
        return: false,
      },
      sections: [
        {
          type: 'default',
          items: [
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K', 'P'],
            },

            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K'],
            },
          ],
        },
        {
          type: 'default',
          title: 'Recent',
          items: [
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K', 'P'],
            },
          ],
        },
        {
          icon: <LuUsers />,
          title: 'User',
          type: 'user',
          viewAll: 'users',
          items: [
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
          ],
        },
      ],
    },

    users: {
      info: {
        return: true,
        title: 'Users',
        icon: <LuUsers />,
      },
      sections: [
        {
          type: 'user',
          return: true,
          items: [
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
          ],
        },
      ],
    },
  }

  return <Ui data={data} />
}
