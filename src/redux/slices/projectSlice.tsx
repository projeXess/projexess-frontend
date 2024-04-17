/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

export interface projectState {
    project: {
        projectName: string;
        projectSector: string;
        projectSizeRange: string;
        projectMembers: string[];
        projectDeadline: string;
        projectDescription: string;
        projectOWner: string;
    } | null,
}

const initialState: projectState = {
    project: null,
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject: function (_state, _action) {
            _state.project = _action.payload;
        },
    },
})

export const { addProject } = projectSlice.actions

export default projectSlice.reducer