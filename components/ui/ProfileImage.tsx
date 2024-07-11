import Image from 'next/image'
import React from 'react'

function ProfileImage() {
  return (
    <Image className='profile' src="/ProfileImage.png" alt='Profile Picture' width={250} height={250} style={{objectFit: "contain"}} />
  )
}

export default ProfileImage