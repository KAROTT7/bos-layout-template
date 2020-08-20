import React, { useState } from 'react'
import Link from 'next/link'

function Template() {
  return (
    <div>
      <div>list</div>
      <div>
        <Link href="/transaction/list/detail">
          <a>detail</a>
        </Link>
      </div>
    </div>
  )
}

export default Template
