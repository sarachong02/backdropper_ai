import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 px-4 lg:px-44 py-3'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @SaraChong | All right reserved.</p>

        <div className='flex gap-3'>
          <a href="https://www.facebook.com/sara.chong.733/" target="_blank">
            <img width={30} src={assets.facebook_icon} alt="Facebook Icon" />
          </a>

          <a href="https://www.linkedin.com/in/sara-chong-3988a8212/" target="_blank">
            <img width={30} src={assets.linkedin_icon} alt="" />
          </a>

          <a href="https://github.com/sarachong02" target="_blank">
            <img width={30} src={assets.github_icon} alt="" />
          </a>
        </div>
    </div>

  )
}

export default Footer