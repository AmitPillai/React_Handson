import React from 'react';


class ImageCard extends React.Component{
    constructor(props) {
        super(props);
        this.imageList = React.createRef();
        this.state = { spans: 0};
    }

    componentDidMount() {
        this.imageList.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageList.current.clientHeight;
        const spans = Math.round(height/10 +1);

        this.setState({spans});
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageList}
                    src={urls.regular}
                    alt={description }
                />
            </div>
        );
    }
}

export default ImageCard;
