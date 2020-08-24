/**
 * @file demo...
 */
import React, {
	Component
} from "react";
import ReactDOM from 'react-dom';
import { createPage } from 'nc-lightapp-front';
import Table from './components/Table';
import Header from './components/Header';
import initTemplate from './initTemplate';
import { onbeforeunload } from './utils';
import { COMPONENTS_ID, PAGE_CONST } from './constant';
import { HandleRequestBusi, ButtonClick } from './events/index';
import "./index.less";

class TestDemo extends Component {
	constructor (props) {
		super(props);
		this.state = {
			json: {}, // 多语资源
			isSelected: false, // 是否有选中行
		};
		this.onbeforeunload = onbeforeunload.bind(this);
		this.queryBusi = HandleRequestBusi.queryBusi.bind(this);
	}

	/**
	 * @method 当前页面挂载前调用
	 */
	componentWillMount () {
		let callback = (json, status, intl) => {
			this.setState({ json });
			initTemplate.call(this)
		}
		this.props.MultiInit.getMultiLang({ moduleId: '1050002009', domainName: 'epmp', callback })
	}

	/**
	 * @method 当前页面挂载完成时调用
	 */
	componentDidMount () {
		this.onbeforeunload();
		this.queryBusi();
	}

	render () {
		let commonProps = {
			...this.props,
			state: this.state,
		}
		let headerProps = {
			...commonProps,
			onButtonClick: (props, id) => ButtonClick[id].call(this)
		}
		let tableProps = {
			...commonProps,
		}
		return (
			<div className="ncc-page">
				<Header { ...headerProps } />
				<Table { ...tableProps } />
			</div>
		);
	}
}

TestDemo = createPage({})(TestDemo);

ReactDOM.render(<TestDemo />, document.querySelector("#app"));
