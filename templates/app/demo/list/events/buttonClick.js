/**
 * @file 文件用法定位：该js文件内，只处理普通按钮的点击事件。
 * 1、不要在此处向后端发送ajax请求，只组装后端接口需要的参数，然后调用相关方法处理请求及返回数据的逻辑！
 * 2、不定义非普通按钮点击事件的函数！
 * 3、其他。
 */

import { promptBox, toast } from 'nc-lightapp-front';
import { TOAST_COLOR, COMPONENTS_ID, STATUS, TABLE_COL_NAME } from '../constant';

/**
 * @method 新增
 */
export function Add () {
    let { props } = this;
    this.toggleStatus(STATUS.edit);
    props.editTable.addRow(COMPONENTS_ID.demoTableId, undefined, true, {}); // 默认追加到最后一行,并自动聚焦
}

/**
 * @method 编辑
 */
export function Edit () {
    this.toggleStatus(STATUS.edit);
}
