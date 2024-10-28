import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Button = ({ children, disabled, to }) => {

    const className = "rounded-full bg-yellow-500 px-2 py-2 font-semibold tracking-wide uppercase hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    if (to) {
        return <Link className={className} to={to}>{children}</Link>
    }
    return (
        <button className={className} disabled={disabled}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    to: PropTypes.string
};


export default Button