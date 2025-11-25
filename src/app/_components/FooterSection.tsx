import { useThemeStore } from '@/stores/themeStore';
import React from 'react'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const { theme } = useThemeStore();
  return (
    <div className='flex justify-center items-center pb-8'>
      <p className={`${theme == 'dark' ? 'text-white' : ''}`}>Copyright © {currentYear} Mabel Samuel - All Rights Reserved.</p>
    </div>
  )
}
