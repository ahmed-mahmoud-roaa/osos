import { GoSearch } from 'react-icons/go'
import { clx } from '../../../../utils/helpers'

const InputSearch = ({
  radius = 'md',
  endContent,
  id,
  placeholder,
  inputClassName,
}) => {
  return (
    <>
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <GoSearch className="text-gray-400" />
        </div>
        <input
          type="search"
          id={id}
          className={clx(
            [
              'block w-full  py-3 px-4.5 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
            ],
            ['placeholder:text-base placeholder:font-normal'],
            ['outline-primary-500'],
            { 'rounded-full': radius === 'full' },
            { 'rounded-lg': radius === 'md' },
            inputClassName
          )}
          placeholder={placeholder}
          required
        />
        {endContent && (
          <span
            className={clx([
              'absolute right-2.5 bottom-2 text-gray-600 text-sm px-4 py-2',
            ])}
          >
            {endContent}
          </span>
        )}
      </div>
    </>
  )
}

export default InputSearch
