const proxyAddress = '/' + 'wyethErp/wyeth' // 开发环境
// const proxyAddress = '/wyeth' // 线上环境

const publics = {
  menus: proxyAddress + '/sys/menu/listForUser' // 菜单数据地址
}

export default Object.assign(
  {}, publics
)
