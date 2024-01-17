import React from 'react'
import NotificationBlock from './components/NotificationBlock'

const Notifications=()=> {
  const notification=[
    {title:'Notification Settings',
    subTitle:'You will get only notification what have enabled.',
   
    },
    {title:'Security Alerts',
    subTitle:'You will get only those email notification what you want.',
    checkedData:[
      {checked:true,label:"Email me whenever encounter unusual activity"},
      {checked:false,label:"Email me if new browser is used to sign in"},
    ]
    } ,
    {title:'News',
    subTitle:'You will get only those email notification what you want.',
    checkedData:[
      {checked:true,label:"Notify me by email about sales and latest news"},
      {checked:false,label:"Email me about new features and updates"},
      {checked:true,label:"Email me about tips on using account"},
  ]} 
  ]
  return (
    <>
    <NotificationBlock data={notification}/>
    </>
  )
}

export default Notifications