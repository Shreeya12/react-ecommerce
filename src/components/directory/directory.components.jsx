import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'lights',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/furniture.jpg',
                    id: 1,
                    linkUrl: 'shop/lights'
                  },
                  {
                    title: 'decor',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/decor.jpg',
                    id: 2,
                    linkUrl: 'shop/decor'
                  },
                  {
                    title: 'rugs',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/rugs.jpg',
                    id: 3,
                    linkUrl: 'shop/rugs'
                  },
                  {
                    title: 'beddings',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/indoor.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/beddings'
                  },
                  {
                    title: 'patio',
                    imageUrl: 'https://7-xillow.s3-us-west-1.amazonaws.com/outdoor.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/patio'
                  }
            ]
        }
    }
    render() {
        return (
            <div className= 'directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;