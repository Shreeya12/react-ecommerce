import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'furniture',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/furniture.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'decor',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/decor.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'rugs',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/rugs.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'Indoor',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/indoor.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'Outdoor',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/outdoor.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]
        }
    }
    render() {
        return (
            <div className= 'directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;