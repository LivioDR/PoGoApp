import React from "react";
import Badge from 'react-bootstrap/Badge'

const TypeBadgesCustom = (props) => {

    const styles = {
        'width': '25%',
        'height': '50%',
        'background': 'purple',
        'border-radius': '10%/50%',
        'justify-content': 'center',
        'align-items': 'center',
    }

    const type = props.type
    console.log(type)

    const TypeColor = {
        'Dark': {
            bg:     'dark',
            text:   'light'
        },
        'Dragon': {
            bg:     'primary',
            text:   'dark'
        },
        'Electric': {
            bg:     'warning',
            text:   'dark'
        },
        'Fire': {
            bg:     'danger',
            text:   'light'
        },
        'Flying': {
            bg:     'info',
            text:   'light'
        },
        'Grass': {
            bg:     'success',
            text:   'light'
        },
        'Poison': {
            bg:     'purple',
            text:   'dark'
        },
        'Psychic': {
            bg:     'success',
            text:   'light'
        },
        'Rock': {
            bg:     'success',
            text:   'light'
        },
        'Steel': {
            bg:     'light',
            text:   'dark'
        },
        'Water': {
            bg:     'primary',
            text:   'light'
        }
        
    }
    return(
        <div style={styles}>
            {type}
        </div>
    )
    // return(
    //     <Badge pill bg={TypeColor[type].bg} text={TypeColor[type].text}>
    //         {type}
    //     </Badge>
    // )
}
export default TypeBadgesCustom