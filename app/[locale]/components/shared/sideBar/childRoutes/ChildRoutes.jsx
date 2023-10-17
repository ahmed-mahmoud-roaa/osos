const ChildrenRoutes = ({ childRoutes }) => {
  return (
    <div onClick={() => childRoutes.action()} className="cursor-pointer">
      <div className={`flex items-center p-2 font-semibold`}>
        <div className="icon pr-2 rtl:pl-2 rtl:pr-0 text-2xl text-themeGray-500">
          {childRoutes?.icon && childRoutes.icon}
        </div>
        <div className="title">{childRoutes.title}</div>
      </div>
    </div>
  )
}
export default ChildrenRoutes
