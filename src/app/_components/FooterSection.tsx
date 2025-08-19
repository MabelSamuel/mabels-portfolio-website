import React from 'react'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center'>
      <p>Copyright © {currentYear} Mabel Samuel - All Rights Reserved.</p>
    </div>
  )
}
