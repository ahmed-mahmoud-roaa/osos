const ChildrenRoutes = ({ childRoutes, actions }) => {
  return (
    <div
      onClick={() => {
        actions && actions[childRoutes.action[0]](...childRoutes.action[1])
      }}
      className={`cursor-pointer ${!childRoutes.active && 'group'}`}
    >
      <div
        className={`flex items-center p-2 font-semibold rounded-md ${
          !childRoutes.active && 'hover:bg-themeGray-100'
        }`}
      >
        <div
          className={`icon pr-2 rtl:pl-2 rtl:pr-0 text-xl group-hover:text-primary-600 ${
            childRoutes.active ? ' text-primary-600' : 'text-themeGray-500 '
          }`}
        >
          {childRoutes.icon}
        </div>
        <div
          className={`title group-hover:text-primary-600  text-themeGray-700 ${
            childRoutes.active && 'text-primary-600'
          }`}
        >
          {childRoutes.title}
        </div>
      </div>
    </div>
  )
}
export default ChildrenRoutes
