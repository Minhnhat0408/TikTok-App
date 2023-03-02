import classNames from "classnames/bind";
import styles from './SugAccount.module.scss'
import PropTypes from 'prop-types'
import SugAccountsItem from "./SugAccountsItem";
import Button from "~/component/Button";
const cx = classNames.bind(styles)

function SugAccount({ title,children }) {
    const data = {
        nickname:'theanh28entertainment',
        avatar:"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677744000&x-signature=Aez8v1hh03OR4cNT4anfn3LoM5c%3D",
        full_name:"Theanh28 Entertainment",
        tick:true
    
      }
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <SugAccountsItem data={data}/>  
            <SugAccountsItem data={data}/>
            <SugAccountsItem data={data}/>
            <p  className={cx('btn')}>See all</p>   
        </div>
    )
}

SugAccount.propTypes = {
    title: PropTypes.string.isRequired
}

export default SugAccount;