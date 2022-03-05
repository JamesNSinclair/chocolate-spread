import React from 'react'
import WeightEntry from './fieldElements/WeightEntry.js'
import RepsEntry from './fieldElements/RepsEntry.js'
import PrevRepWeight from './fieldElements/PrevRepWeight.js'
import ExerciseName from './fieldElements/ExerciseName.js'
import SetTimer from './fieldElements/SetTimer.js'

function Set() {
    return (
        <>
            <ExerciseName />
            <PrevRepWeight />
            <RepsEntry />
            <WeightEntry />
            <SetTimer />
        </>
    )
}

export default Set