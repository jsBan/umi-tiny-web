import styles from './index.less';
import {Link} from "umi"
import "./index.less"


export default function IndexPage() {
  // const intl = useIntl()

  return (
    <div className="wapper">
      <h1 className={styles.title}>基座应用</h1>
      {/* {intl.formatMessage({id:'project.package.login.hello'}, */}
      {/* {name: '小伙子'})} */}
      <Link to="/app1">点击跳转到子应用A</Link><br />
      <Link to="/app2">点击跳转到子应用B</Link><br />
      <Link to="/app3">点击跳转到子应用B</Link>
    </div>
  );
}
