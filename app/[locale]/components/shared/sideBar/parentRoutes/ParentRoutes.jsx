import ChildrenRoutes from '../childRoutes/ChildRoutes'

const { useState } = require('react')
const { HiOutlineChevronRight } = require('react-icons/hi')

const ParentRoutes = ({ parentRoutes }) => {
  const [status, setStatus] = useState(false)

  return (
    <>
      <div className="route flex items-center justify-between flex-wrap ">
        <div
          onClick={() => setStatus(!status)}
          className={`group flex items-center w-full justify-between cursor-pointer hover:bg-themeGray-100 rounded-md`}
        >
          <div className={`flex items-center p-2 font-semibold`}>
            <div className="icon pr-2 rtl:pl-2 rtl:pr-0 text-2xl text-themeGray-500  group-hover:text-primary-600  ">
              {parentRoutes.icon}
            </div>
            <div className="title group-hover:text-primary-600">
              {parentRoutes.title}
            </div>
          </div>
          <div
            className={`${
              status ? 'rotate-90' : 'rotate-0'
            } arrow font-semibold ease-in-out duration-300 text-xl text-themeGray-500 p-2 title group-hover:text-primary-700`}
          >
            <HiOutlineChevronRight />
          </div>
        </div>
        {parentRoutes.children ? (
          <div
            className={`accordionBody overflow-hidden transition-max-h-screen ease-in-out duration-500 w-full ${
              status ? 'max-h-screen' : 'max-h-0'
            } ${status}`}
          >
            <div className="children ml-4 rtl:ml-0 rtl:mr-4">
              {Object.keys(parentRoutes.children).map((childRoute, index) => (
                <div className="route" key={index}>
                  {parentRoutes.children[childRoute].type === 'parent' ? (
                    <ParentRoutes
                      parentRoutes={parentRoutes.children[childRoute]}
                    />
                  ) : (
                    <ChildrenRoutes
                      childRoutes={parentRoutes.children[childRoute]}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ParentRoutes
