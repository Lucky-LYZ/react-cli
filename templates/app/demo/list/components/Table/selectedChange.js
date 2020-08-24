import { toast, high } from 'nc-lightapp-front';
import { COMPONENTS_ID, BUTTON_CODE } from '../../constant';


/**
 * @method editTable区选择项变更按钮
 */
export default function selectedChange (props) {
    // ...逻辑处理...
    let { editTable, button } = props;
    let checkRows = editTable.getCheckedRows(COMPONENTS_ID.demoTableId);
    if (checkRows && checkRows.length > 0) {
        button.setButtonDisabled([BUTTON_CODE.Delete], false);
    } else {
        button.setButtonDisabled([BUTTON_CODE.Delete], true);
    }
}
