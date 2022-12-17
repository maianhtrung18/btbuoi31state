import React, { Component } from 'react'
import axios from 'axios'


export default class Carousel extends Component {

    url = 'https://63676ecaf5f549f052d54efc.mockapi.io/';

    data = [
        {
         "id": 1,
         "price": 30,
         "name": "GUCCI G8850U",
         "url": "./glassesImage/v1.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 1. "
        },
        {
         "id": 2,
         "price": 50,
         "name": "GUCCI G8759H",
         "url": "./glassesImage/v2.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 2. "
        },
        {
         "id": 3,
         "price": 30,
         "name": "DIOR D6700HQ",
         "url": "./glassesImage/v3.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 3. "
        },
        {
         "id": 4,
         "price": 70,
         "name": "DIOR D6005U",
         "url": "./glassesImage/v4.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 4. "
        },
        {
         "id": 5,
         "price": 40,
         "name": "PRADA P8750",
         "url": "./glassesImage/v5.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 5. "
        },
        {
         "id": 6,
         "price": 60,
         "name": "PRADA P9700",
         "url": "./glassesImage/v6.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 6. "
        },
        {
         "id": 7,
         "price": 80,
         "name": "FENDI F8750",
         "url": "./glassesImage/v7.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 7. "
        },
        {
         "id": 8,
         "price": 100,
         "name": "FENDI F8500",
         "url": "./glassesImage/v8.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 8. "
        },
        {
         "id": 9,
         "price": 60,
         "name": "FENDI F4300",
         "url": "./glassesImage/v9.png",
         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 9. "
        }
       ];

   

    

    state = {
        imgSrc: "./glassesImage/v1.png",
        name: "GUCCI G8850U",
        decs: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
    }

 

    hienThiSanPham = () => {
            return this.data.map((element)=>{
                return <a href="#"><img key={element.id} src={element.url} alt="" srcset="" onClick={()=>{
                    let newState = {
                        imgSrc: element.url,
                        name: element.name,
                        decs: element.desc
                    }
                    this.setState(newState);
                }}/></a>;
            })
    }



    render() {   
        return (          
            <section className='carousel'>
                <div className='blackLayer'></div>
                <div className='container'>

                    <div className='avatar'>
                        <div className='leftAvatar'>
                            <div className='leftAvatarContainer'>
                                <img src="./glassesImage/model.jpg" alt="" />
                                <img className='glassesWearing' src={this.state.imgSrc} alt="" />
                                <div className='description'>
                                    <p className='title'>{this.state.name.toLocaleUpperCase()}</p>
                                    <p className='content'>{this.state.decs}</p>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className='rightAvatar'>
                            <img src="../glassesImage/model.jpg" alt="" />
                        </div>
                    </div>
                    <div className='listGlasses'>
                        <div className='listGlassesContainer'>
                            {this.hienThiSanPham()}
                        </div>
                        
                    </div>
                </div>
                
            </section>
        )
    }
}
