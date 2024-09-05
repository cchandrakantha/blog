import React from 'react'
import Html from './Html'
import Css from './Css'
import Js from './Js';
import ReactFile from './ReactFile';
import BuildTools from './BuildTools'
import VersionControl from './VersionControl';
import PackageManagers from './PackageManagers'
import DesignTools from './DesignTools';
import Formatting from './Formatting';

export default function Frontend() {
  return (
    <div >
      <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-5xl font-semi-bold text-cyan-500 '>
        Frontend
      </h1>
      <Html />
      <Css />
      <Js />
      <ReactFile />
      <BuildTools />
      <VersionControl />
      <PackageManagers />
      <DesignTools />
      <Formatting />
    </div>
  )
}
