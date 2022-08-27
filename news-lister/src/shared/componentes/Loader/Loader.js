import PropTypes from 'prop-types';
import './LoaderStyle.css';

const Loader = ({ loading }) => {
    return (
        loading && <div className="loader"></div>
    );
};
Loader.defaultProps = {
    loading: false
};
Loader.propTypes = {
    loading: PropTypes.bool
};

export default Loader;
