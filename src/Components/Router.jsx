import React from 'react'
import Home from './Home'
import Arrowfunction from './Arrowfunction'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Arraymethod from './Arraymethod'
import Arraytable from './Arraytable'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Localstore from './Localstore'

import img1 from '../IMAGES/img1.jpg';
import img2 from '../IMAGES/img2.jpg';
import img3 from '../IMAGES/img3.jpg';
import img4 from '../IMAGES/img4.jpg';
import img5 from '../IMAGES/img5.jpg';

import Tableform from './Tableform'
import Darklight from './Darklight'
import LocalStorageget from './LocalStorageget'
export default function Router() {
    const employee=[{
        profile:{img:img1,name:"RITHESH"},
        designation:'Software Engineer',
        department:'IT',
        skills:['HTML','CSS','Javascript','PHP','React'],
       phone:7465663737,
       email:'ritheshjaston22@gmail.com',
        address:"Manglore"
      },{
        profile:{img:img2,name:"John Doe"},
        designation:'Software Engineer',
        department:'IT Department',
        skills:['HTML','CSS','Javascript','PHP','React','Mysql','MongoDB'],
       phone:5656734556,
       email:'johndoe@gmail.com',
        address:"Mumbai"
      },{
        profile:{img:img3,name:"Sarah smith"},
        designation:'Data Scientist',
        department:'Bussiness Intelliogence',
        skills:['Python','SQL','Tableau'],
       phone:2146523676,
       email:'sarah@gmail.com',
        address:"Banglore"
      },{
        profile:{img:img4,name:"Riyan Kim"},
        designation:'Product Manager',
        department:'Marketing',
        skills:['Excel','PowerPoint'],
       phone:5968895689,
       email:'riyan@gmail.com',
        address:"delhi"
      },{
        profile:{img:img5,name:"Oliver Holmes"},
        designation:'UI Designer',
        department:'Design',
        skills:['Figma','Sketch'],
       phone:986756543456,
       email:'oliver@gmail.com',
        address:"chennai"
      }];
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Arrowfunction' element={<Arrowfunction/>}/>
                    <Route exact path='/Array' element={<Arraymethod/>}/>
                    <Route exact path='/task2' element={<Arraytable employee={employee}/>} />
                    <Route exact path='/state' element={<Usestate/>} />
                    <Route exact path='/effect' element={<Useeffect/>} />
                    <Route exact path='/table' element={<Tableform/>} />
                    <Route exact path='/dark' element={<Darklight/>} />
                    <Route exact path='/local' element={<Localstore/>} />
                    <Route exact path='/localget' element={<LocalStorageget/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
