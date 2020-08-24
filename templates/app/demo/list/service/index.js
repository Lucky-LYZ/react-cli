/**
 * @file 文件用法定位：此文件只做后端请求并将获取的数据返回，不对数据进行业务逻辑的处理！！
 */

import epmp from 'epmp';
import { API_URL } from '../constant';
const { EpmpUtils } = epmp;
const { promiseAjax } = EpmpUtils;

/**
 * @method 查询股权投资方案
 */
export async function query (params) {
    return await promiseAjax(API_URL.query, params);
}

/**
 * @method 删除股权投资方案
 */
export async function del (postData) {
    return await promiseAjax(API_URL.del, postData);
}

/**
 * @method 保存股权投资方案
 */
export async function save (postData) {
    return await promiseAjax(API_URL.save, postData);
}





