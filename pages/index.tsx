import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.less'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

const { SubMenu } = Menu

const menuList = [
  { path: '/' },
  {
    path: '/transaction',
    routes: [
      { path: '/transaction/list' },
      { path: '/transaction/list/detail', hide: true },
      { path: '/transaction/send' },
    ]
  }
]

function geneMenu(menuList) {
  
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
          <div>
            <Link href="/transaction/list">
              <a>list</a>
            </Link>
          </div>
          <div>
            <Link href="/transaction/send">
              <a>send</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
