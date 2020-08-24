/**
 * @file 文件用法定位：该js文件用于对后端返回的数据进行相关业务处理
 * 1、不在此文件向后端发请求，而是调用service层提供的api获取后端数据！
 * 2、不定义非获取后端返回数据进行逻辑处理的普通函数！
 * 3、所有调用service，都经过此文件进行调用。
 */

import {
    toast,
} from 'nc-lightapp-front';
import { TOAST_COLOR, COMPONENTS_ID } from '../constant';
import * as Services from '../service';

/**
 * @method 查询股权投资方案
 */
export async function queryBusi (params) {
    let res = await Services.query(params);
    let { data } = res;
    if (params && params.refresh) {
        toast({
            color: TOAST_COLOR.success,
            content: this.state.json['1050002009-000021'] /* 国际化处理： 刷新成功*/
        })
    }
    if (data && data.rows && data.rows.length > 0) {
        this.props.editTable.setTableData(COMPONENTS_ID.demoTableId, data);
    } else {
        this.props.editTable.setTableData(COMPONENTS_ID.demoTableId, { rows: [] });
    }
}
