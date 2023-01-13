import React from 'react';
import {useDispatch} from 'react-redux';

import {updateSettings} from '../redux';
import type {AppWrapperProps} from '../interfaces';

export function AppWrapper({stars, children}: AppWrapperProps) {
	const dispatch = useDispatch();
	dispatch(updateSettings(stars));
	return <div>{children}</div>;
}
