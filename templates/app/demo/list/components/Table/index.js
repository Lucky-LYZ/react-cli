
/**
 * @file 快速创建应用，达到规范目的
 * @param {*} props 
 */

import { toast } from 'nc-lightapp-front';
import selectedChange from './selectedChange';
import { COMPONENTS_ID, STATUS } from '../../constant';


export default function Table (props) {

    let { editTable } = props;
    let { createEditTable } = editTable;

    return (
        <div className="ncc-table">
            {
                createEditTable(COMPONENTS_ID.demoTableId, {
                    isAddRow: true,
                    showIndex: false,
                    adaptionHeight: true,
                    selectedChange,
                    showCheck: editTable.getStatus() !== STATUS.edit,
                })
            }
        </div>
    )
}