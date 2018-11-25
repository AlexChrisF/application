import React, { Component } from 'react';
import styles from './Image.css';
import { withStyles } from '@material-ui/core/styles';

class Image extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;

    // canvas.height = this.props.height;
    // canvas.width = this.props.width;

    canvas.height = 256;
    canvas.width = 256;

    const context = canvas.getContext('2d');

    const image = this.refs.image;

    const ratio = Math.min(
      canvas.width / image.width,
      canvas.height / image.height
    );

    image.onload = () => {
      context.drawImage(image, 0, 0, image.width * ratio, image.height * ratio);
    };
  }

  render() {
    const { classes, src } = this.props;

    return (
      <div>
        <canvas
          className={classes.image}
          ref="canvas"
          height={this.props.height}
          width={this.props.width}
        />

        <img ref="image" src={src} style={{ visibility: 'hidden' }} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Image);
