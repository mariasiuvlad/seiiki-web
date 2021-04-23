import * as R from 'ramda'
import React from 'react'

const createElement = R.curryN(2, React.createElement)
export const mapProps = R.flip(R.useWith(R.o, [createElement, R.identity]))
export const setKey = (from) => (v) => ({...v, key: v[from]})
