import React, { useState, useEffect } from 'react'
import '../styles/globals.less'
import Head from 'next/head'
import { Menu } from 'antd'
import Link from 'next/link'
import styles from '../styles/Home.module.less'
import {
  MenuFoldOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu

const menuList = [
  { path: '/', name: '首页' },
  {
    path: '/transaction',
    name: '交易管理',
    routes: [
      { path: '/transaction/list', name: '交易列表' },
      { path: '/transaction/list/detail', name: '详情', hide: true },
      { path: '/transaction/send', name: 'Send 列表' },
      {
        path: '/transaction/stats',
        name: '数据统计',
        routes: [
          { path: '/transaction/stats/a', name: 'a' },
          { path: '/transaction/stats/b', name: 'b' },
          { path: '/transaction/stats/c', name: 'c', hide: true },
        ]
      },
    ]
  }
]

function geneMenu(menuList) {
  return menuList.map(menu => {
    if (menu.routes && menu.routes.length) {
      return (
        <SubMenu key={menu.path} title={menu.name}>
          {menu.routes.map(child => {
            if (child.hide !== true) {
              if (child.routes && child.routes.length) {
                return (
                  <SubMenu key={child.path} title={child.name}>
                    {geneMenu(child.routes)}
                  </SubMenu>
                )
              }

              return (
                <Menu.Item key={child.path}>
                  <Link href={child.path}>
                    <a>{child.name}</a>
                  </Link>
                </Menu.Item>
              )
            }

            return null
          })}
        </SubMenu>
      )
    } else if (menu.hide !== true) {
      return (
        <Menu.Item key={menu.path}>
          <Link href={menu.path}>
            <a>{menu.name}</a>
          </Link>
        </Menu.Item>
      )
    }
  })
}

function MyApp({ Component, pageProps }) {
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    setCollapsed(localStorage.getItem('collapsed') === 'true')
  }, [])
  const asideWidth = collapsed ? 80 : 256

  return (
    <>
      <Head>
        <title>Bos-Layout-Template</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@4.5.4/dist/antd.min.css" />
      </Head>

      <aside
        className={styles.aside}
        style={{
          width: asideWidth
        }}
      >
        <Menu
          defaultSelectedKeys={['/']}
          inlineCollapsed={collapsed}
          mode="inline"
          theme="dark"
        >
          {geneMenu(menuList)}
        </Menu>
      </aside>
      <main
        className={styles.main}
        style={{
          marginLeft: asideWidth
        }}
      >
        <header className={styles.header}>
          <MenuFoldOutlined
            className={styles.menuIcon}
            onClick={() => {
              localStorage.setItem('collapsed', '' + !collapsed)
              setCollapsed(!collapsed)
            }}
          />
        </header>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

export default MyApp
