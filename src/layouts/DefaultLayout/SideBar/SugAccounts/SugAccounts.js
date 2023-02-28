import classNames from "classnames/bind";
import styles from './SugAccount.module.scss'

const cx = classNames.bind(styles)

function SugAccount({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default SugAccount;