
/**
 * @file 头部右侧按钮组件
 * @param {*} props 
 */
export default function Header (props) {
    let { onButtonClick, button } = props;
    return (
        <div id="ncc-page-header-btns">
            {
                button.createButtonApp({
                    area: 'ncc-page-header-btns',
                    onButtonClick
                })
            }
        </div>
    )
}