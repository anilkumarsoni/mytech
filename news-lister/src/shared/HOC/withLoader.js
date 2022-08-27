import PropTypes from 'prop-types';
import React from 'react';
import Loader from '../componentes/Loader';

/**
 * Name: withLoader
 * Desc: Render Loader
 * @param {element} TargetComponent
 */

function withLoader(TargetComponent) {
    class WithLoader extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                loading: false
            };
            this.isMount = false;
        }

        componentDidMount = () => {
            this.isMount = true;
        };

        componentWillUnmount = () => {
            this.isMount = false;
        };

        setLoading = (loading) => {
            if (this.isMount) {
                this.setState({ loading });
            }
        };

        render() {
            const { loading } = this.state;
            return (
                <>
                    <Loader loading={loading} pageLoader={true} />
                    <TargetComponent
                        setLoading={this.setLoading}
                        isLoading={loading}
                        {...this.props}
                    />
                </>
            );
        }
    }

    return WithLoader;
}

withLoader.propTypes = {
    TargetComponent: PropTypes.element
};

export default withLoader;
