import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu,{MenuItem} from './Menu';
import routes from '~/config/routes';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title='For You' to={routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>} />
        <MenuItem title='Following' to={routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
        <MenuItem title='LIVE' to={routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
      </Menu>
    </aside>
  );
}

export default Sidebar;
