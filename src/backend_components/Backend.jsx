import React from 'react'
import Program_lang from "./Program_lang" 
import Databses from './Databases'
import Frameworks from './Frameworks'
import APIs from './APIs.jsx'
import DevOps from './DevOps.jsx'
import Authentication from './Authentication.jsx'
import CloudServices from './CloudServices.jsx'


export default function Backend() {
  return (
    <div>
      <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-5xl font-semi-bold text-cyan-500'>
        Backend
      </h1>
      <Program_lang />
      <Frameworks />
      <Databses />
      <APIs />
      <DevOps />
      <Authentication />
      <CloudServices />
    </div>
  )
}
