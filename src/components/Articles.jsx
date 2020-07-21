import React from 'react'
import Art from './Art'
import argmap from './articles/artmap.json';

export default function Articles() {
    return (
        <div>
            {
                argmap.map((i) => (
                    <Art
                        artlink={i.artlink}
                        // artimg={i.artimg}
                        artimg={require(`../images/${i.artimg}`)}
                        imgalt={i.imgalt}
                        arttitle={i.arttitle}
                        artdesc={i.artdesc}
                        artauthor={i.artauthor}
                        artdate={i.artdate}>
                    </Art>
                ))
            }
            <br />
            <br />
Z      </div>
    )
} 