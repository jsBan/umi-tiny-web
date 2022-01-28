import styles from './index.less';

import { Link } from "umi";

export default function IndexPage() {
  return (
    <div>
       <Link to="../login">去登录页面</Link>
    </div>
  );
}
