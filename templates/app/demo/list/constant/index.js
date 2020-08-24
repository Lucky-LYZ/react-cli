/**
 * @file 文件定位： 该文件用于提取该节点的所有常量
 */


/**
 * @constant 不好归类定义的常量
 */
const PAGE_CONST = {
    pageFrameworkType: '1', // 页面布局类型
}


/**
* @constant ajax请求地址
*/
const API_URL = {
    query: '/nccloud/bcs/stock/query.do', // 查询股权投资方案
    del: '/nccloud/bcs/stock/del.do', //删除股权投资方案
    save: '/nccloud/bcs/stock/save.do', //保存股权投资方案
}

/**
 * @constant toast消息的color
 */
const TOAST_COLOR = {
    success: 'success',
    danger: 'danger',
    warning: 'warning'
}

/**
 * @constant 组件ID
 */
const COMPONENTS_ID = {
    demoTableId: 'demoTableId', // 股权投资方案列表组件id
}

/**
 * @constant 组件/页面状态
 */
const STATUS = {
    browse: 'browse',
    edit: 'edit',
    add: 'add'
}

/**
 * @constant 按钮编码
 */
const BUTTON_CODE = {
    Add: 'Add',
    Delete: 'Delete',
    Save: 'Save',
    Cancel: 'Cancel',
    TableDelete: 'TableDelete',
    Refresh: 'Refresh',
}

/**
 * @constant table列名
 */
const TABLE_COL_NAME = {
    creatorName: 'creatorName',
    modifierName: 'modifierName',
    pk_stockinvestscheme: 'pk_stockinvestscheme',
}

export {
    STATUS,
    API_URL,
    PAGE_CONST,
    TOAST_COLOR,
    BUTTON_CODE,
    COMPONENTS_ID,
    TABLE_COL_NAME,
}