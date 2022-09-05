import React from "react";
import Badge from 'react-bootstrap/Badge'

const TypeBadge = (props) => {

    const type = props.type
    // console.log(type)

    const TypeColor = {
        'Bug': {
            bg:     'green',
            text:   'dark'
        },
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
        'Fairy': {
            bg:     'pink',
            text:   'dark'
        },
        'Fighting': {
            bg:     'danger',
            text:   'dark'
        },
        'Fire': {
            bg:     'danger',
            text:   'light'
        },
        'Flying': {
            bg:     'info',
            text:   'dark'
        },
        'Grass': {
            bg:     'success',
            text:   'light'
        },
        'Ghost': {
            bg:     'dark',
            text:   'light'
        },
        'Ground': {
            bg:     'brown',
            text:   'dark'
        },
        'Ice': {
            bg:     'info',
            text:   'light'
        },
        'Normal': {
            bg:     'light',
            text:   'dark'
        },
        'Poison': {
            bg:     'purple',
            text:   'dark'
        },
        'Psychic': {
            bg:     'pink',
            text:   'dark'
        },
        'Rock': {
            bg:     'brown',
            text:   'dark'
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
        <Badge pill bg={TypeColor[type].bg} text={TypeColor[type].text}>
            {type}
        </Badge>
    )
}
export default TypeBadge