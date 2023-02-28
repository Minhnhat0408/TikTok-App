
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import image from '~/assets/images';

import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { MessageIcon,UploadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { useState } from 'react';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                {
                    code: 'en',
                    type: 'language',
                    title: 'English',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Not Working'
                            }
                        ]
                    }
                       
                    // can add children here if have another level menu
                },
                {
                    code: 'vi',
                    type: 'language',
                    title: 'Tiếng Việt',
                    children: {
                        title:'Success',
                        data:[
                            {
                                title:'Không hoạt động'
                            }
                        ]
                    }
                },
                
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
    // Handle Logic
    const handleMenuChange = (menuItem) => {
        // xu li khi 1 item trong menu khong co children
        switch (menuItem.type) {
            case 'logOut':
                setCurrentUser(false)
                break;

            default:
                break;
        }
    };
    const [currentUser,setCurrentUser] = useState(false)
    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoa' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/getcoins' },
        ...MENU_ITEM,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out',separate:true, type:'logOut'}];
    const currentItem = currentUser ? userMenu : MENU_ITEM
    console.log('remount', currentItem, currentUser)
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
            
                <Link to={routes.home} className={cx('logo')}>
                    <img src={image.logo} alt="tikTok"></img>
                </Link>
                <Search />
                
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            {/* <Tippy delay={[0, 0]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy> */}

                            <Button className={cx('upload-btn')} small leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="upload" placement="bottom" offset={[0, 14]}>
                                <UploadIcon className={cx('icon')} />
                            </Tippy>
                            <Tippy content="messages" placement="bottom">
                                <MessageIcon className={cx('icon')} />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text small>
                                Upload
                            </Button>
                            <Button primary small onClick={() => setCurrentUser(true)}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu item={currentItem} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/277751572_1315302068964376_895612620486881878_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tQd0KyAhsr8AX9e_Lj_&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAuh1k4QyqFLu9ZRjTAQJkDGeDAbEinzhIs5xq5X9pacw&oe=63FB6280"
                                alt="Nguyen Nhat Minh"
                            ></Image>
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
