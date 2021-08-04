import * as React from "react"
import Flickity from 'react-flickity-component'
import { StaticImage } from "gatsby-plugin-image"


const flickityOptions = {
    initialIndex: 2,
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    wrapAround: true,
}

const Slider = ({ title, cta_link }) => {
    return (
    <div>
    <Flickity
        className={'carousel'} 
        elementType={'div'} 
        options={flickityOptions} 
        disableImagesLoaded={false} // default false
        reloadOnUpdate={true} 
        static // default false
    >
        <img src={'/images/faces/hair/normal.png'} alt=" "/>
        <img src={'/images/faces/hair/serious.png'} alt=" "/>
        <img src={'/images/faces/hair/surprised.png'} alt=" "/>
        <img src={'/images/faces/hair/what.png'} alt=" "/>
        <img src={'/images/faces/hair/worried.png'} alt=" "/>
    </Flickity>
        <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={flickityOptions} 
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} 
            static // default false
        >
            <img src={'/images/faces/eyes/annoyed.png'} alt=" "/>
            <img src={'/images/faces/eyes/closed.png'} alt=" "/>
            <img src={'/images/faces/eyes/glasses.png'} alt=" "/>
            <img src={'/images/faces/eyes/open.png'} alt=" "/>
            <img src={'/images/faces/eyes/surprised.png'} alt=" "/>
        </Flickity>
        <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={flickityOptions} 
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} 
            static // default false
        >
            <img src={'/images/faces/mouth/drool.png'} alt=" "/>
            <img src={'/images/faces/mouth/grr.png'} alt=" "/>
            <img src={'/images/faces/mouth/happy.png'} alt=" "/>
            <img src={'/images/faces/mouth/mad.png'} alt=" "/>
            <img src={'/images/faces/mouth/uwu.png'} alt=" "/>
        </Flickity>
    </div>
    )
}

export { Slider }
export default Slider