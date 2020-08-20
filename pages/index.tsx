import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.less'
import { MenuFoldOutlined } from '@ant-design/icons'

const data = {
  a: 1,
  b: 2
}

export default function Home(props) {
  const [collapsed, setCollapsed] = useState(false)
  const asideWidth = collapsed ? 80 : 256

  return (
    <div className={styles.container}>
      <Head>
        <title>Bos-Layout-Template</title>
      </Head>

      <aside
        className={styles.aside}
        style={{
          width: asideWidth
        }}
      >
        111
      </aside>
      <main
        className={styles.main}
        style={{
          marginLeft: asideWidth
        }}
      >
        <header className={styles.header}>
          <MenuFoldOutlined className={styles.menuIcon} onClick={() => setCollapsed(!collapsed)} />
        </header>
        <div className={styles.container}>
          content
        </div>
      </main>
    </div>
  )
}
