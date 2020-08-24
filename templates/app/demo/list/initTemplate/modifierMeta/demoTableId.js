/**
 * @file 文件用法定位：处理编码为 ‘demoTableId’ 的表格区组件的 modifierMeta、renderItem 信息。
 */

import * as tableButtonClick from '../../events/tableButtonClick';
import { COMPONENTS_ID, BUTTON_CODE } from '../../constant';

/**
 * @function 修改meta
 */
export default function modifyDemoTableId (meta) {
    let { props } = this;
    meta[COMPONENTS_ID.demoTableId].items.push({
        itemtype: "customer",
        visible: true,
        disabled: false,
        label: this.state.json['1050002009-000013'],/* 国际化处理： 操作*/
        fixed: 'right',
        required: false,
        attrcode: "opr",
        width: "200px",
        render: (text, record, index) => {
            let buttonAry = [BUTTON_CODE.TableDelete];
            return props.button.createOprationButton(buttonAry, {
                area: 'table-handle',
                buttonLimit: 3,
                onButtonClick: (props, key) => tableButtonClick[key].call(this, props, key, text, record, index)
            })
        }
    })
    return meta;
}