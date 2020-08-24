/**
 * @file 文件用法定位：此文件用于处理当前节点的公共函数、utils方法！！
 */

import { COMPONENTS_ID, STATUS, BUTTON_CODE, TABLE_COL_NAME } from '../constant';

/**
 * @function 添加window监听事件
 */
export function onbeforeunload () {
    //处理编辑态关闭页签时弹出提示
    window.onbeforeunload = (e) => {
        let tableStatus = this.props.editTable.getStatus(COMPONENTS_ID.demoTableId);
        if (tableStatus === STATUS.edit) {
            const msg = this.state.json['1886000049-000022'];/* 国际化处理： 是否要放弃本次修改？*//* 国际化处理： 是否要放弃本次修改？*/
            e = e || window.event;
            // 兼容IE8和Firefox 4之前的版本
            if (e) {
                e.returnValue = msg;
            }
            // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
            return msg;
        }
    }
}
