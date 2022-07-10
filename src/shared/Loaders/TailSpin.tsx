import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import LoaderProps from './Loaders.types'

const TailSpinLoader: React.FC<LoaderProps> = props => <TailSpin {...props} />

export default TailSpinLoader
