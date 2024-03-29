import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

import type {SettingsType} from '../interfaces';

const initialState: SettingsType = {};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		updateSettings: (state, action) => {
			state = {...state, ...action.payload};
		},
	},
});

export const {updateSettings} = settingsSlice.actions;

// selectors
export const selectAppSettingsAll = (state: RootState) => state.settings;
//TODO remove and wirte indivual selector for each type
export const selectAppSettingsByType =
	(settingType: string) => (state: RootState) =>
		state.settings?.[settingType];

export default settingsSlice.reducer;
