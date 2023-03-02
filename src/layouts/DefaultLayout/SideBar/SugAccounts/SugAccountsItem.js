import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SugAccount.module.scss';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import PopperWrapper from '~/component/Popper/Wrapper'
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function SugAccountsItem({ data }) {
    
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('')}>
            <PopperWrapper className={cx('popper-wrapper')}>
                <AccountPreview data={data}/>
            </PopperWrapper>
        </div>
    )
    return (
        <Tippy

            interactive={true}
            animation={false}
            delay={[800, 0]}
        
            placement="bottom-start"
            appendTo={() => document.body}
            render={renderPreview}
        >
            <Link to={`/user/${data.nickname}`} className={cx('account-item')}>
                <Image src={data.avatar} alt="user" className={cx('avatar')} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                    </h4>
                    <span className={cx('username')}>{data.full_name}</span>
                </div>
            </Link>
        </Tippy>
    );
}

SugAccountsItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SugAccountsItem;
