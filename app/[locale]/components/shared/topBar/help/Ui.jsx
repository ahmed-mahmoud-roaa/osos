import React, { useState } from 'react'
import IconRoundedButton from '../../../elements/buttons/iconRoundedButton/IconRoundedButton'
import { FiHelpCircle } from 'react-icons/fi'
import Search from '../../../elements/search/Search'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { MdClose } from 'react-icons/md'

export default function Ui({ helpData }) {
  const [helpStatus, setHelpStatus] = useState(false)

  return (
    <div
      className={`absolute  bottom-5 left-[-6rem] rtl:left-auto rtl:right-[-6rem]   `}
    >
      <IconRoundedButton
        icon={helpStatus === false ? <FiHelpCircle /> : <MdClose />}
        label={'Help'}
        className={'bg-primary-600 text-themeWhite-white'}
        action={() => {
          setHelpStatus(!helpStatus)
        }}
      />
      {helpStatus && (
        <div className="helpMenu overflow-auto absolute bottom-[120%] h-[80vh] bg-themeWhite-white w-[360px] right-0 rtl:left-0 rtl:right-auto shadow-[0_0px_10px_var(--themeGray-200)]">
          <div className="head bg-primary-50 p-4">
            <h3 className="font-medium text-xl mt-2 mb-4">Help & tips</h3>
            <Search
              inputStyle={`bg-themeWhite-white`}
              placeholder={'Search help center'}
              firstIcon={<PiMagnifyingGlass />}
            />
          </div>
          <div className="helpBody p-4">
            {helpData.map((item, index) => (
              <div key={index} className="helpBlock">
                <h3 className="font-medium text-base mb-2 text-themeGray-700">
                  {item.title}
                </h3>

                {item.blocks.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className="helpItem flex border border-themeGray-200 rounded-xl p-4 mt-1 mb-3 shadow-[0_0px_5px_var(--themeGray-200)] items-start"
                  >
                    <div className="icon p-3  border border-themeGray-200 mr-4 rtl:mr-auto rtl:ml-4 rounded-xl shadow-[0_0px_5px_var(--themeGray-200)] text-primary-600 text-2xl">
                      {block.icon}
                    </div>
                    <div className="content">
                      <div className="head text-themeGray-700 text-base font-medium">
                        {block.title}
                      </div>
                      <div className="desc text-themeGray-500 text-sm ">
                        {block.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
