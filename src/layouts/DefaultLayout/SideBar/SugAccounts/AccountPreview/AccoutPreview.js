import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/component/Image';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image src={data.avatar} alt="user" className={cx('avatar')}/>
                <Button primary small className={cx('follow-btn')}>Follow</Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
                <p className={cx('stats')}>
                    <strong className={cx('value')}>1178</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>3287</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
