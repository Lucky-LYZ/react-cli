/**
 * @file 文件用法定位：该js文件用于获取页面模板数据，并做主流程的处理
 * 1、此文件不真正处理 modifierMeta、renderItem ，只做相关操作的函数调用。真正修改在modifierMeta文件夹下，以组件编码命名的js文件内处理
 * 2、其他。
 */

import epmp from 'epmp';
import { BUTTON_CODE } from '../constant';
import modifyDemoTableId from './modifierMeta/demoTableId';

const { EpmpUtils } = epmp;
const { getTemplate } = EpmpUtils;

/**
 * @method 初始化页面表格数据
 * @param {object} props  
 */
export default async function initTemplate (props) {
    let { template, button, context } = await getTemplate.call(this, {
        appcode: '1050002009',
        pagecode: '1050002009_list'
    });
    if (template) { //模板
        setTemplate.call(this, template); // 设置模板
    }
    if (button) { //按钮 
        setButton.call(this, button); // 设置按钮
    }
}

/**
 * @method 设置模板meta
 * @param {*} meta 
 */
function setTemplate (meta) {
    let { props } = this;
    meta = modifyDemoTableId.call(this, meta);
    props.meta.setMeta(meta);
}

/**
 * @method 配置按钮
 * @param {*} button 
 */
function setButton (button = []) {
    let { props } = this;
    props.button.setButtons(button);
}
