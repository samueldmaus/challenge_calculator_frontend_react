const mapStoreToProps = (reduxState) => {
    return{
        // reduxState properties are bound to 'props.store'
        store: reduxState
    };
};

export default mapStoreToProps;