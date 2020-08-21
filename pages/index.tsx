import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.less'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'
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
  return menuList.map(menu => {
    if (menu.routes && menu.routes.length) {
      return (
        <SubMenu key={menu.path} title={menu.path}>
          {menu.routes.map(child => (
            <Menu.Item key={menu.path}>{menu.path}</Menu.Item>
          ))}
        </SubMenu>
      )
    }

    return (
      <Menu.Item key={menu.path}>{menu.path}</Menu.Item>
    )
  })
}

export default function Home(props) {
  const [collapsed, setCollapsed] = useState(false)
  const asideWidth = collapsed ? 80 : 256

  return (
    <div className={styles.container}>
      <aside
        className={styles.aside}
        style={{
          width: asideWidth
        }}
      >
        {/* <Menu
          defaultSelectedKeys={['1']}
          inlineCollapsed={collapsed}
        >
          {geneMenu(menuList)}
        </Menu> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
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
