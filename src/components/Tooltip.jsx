import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Tooltip } from '@mui/material';

export default function BasicTooltip() {
	return (
		<Tooltip title='Add To Kitchen'>
			<IconButton>
				<AddCircleIcon sx={{ fontSize: '50px' }} />
			</IconButton>
		</Tooltip>
	);
}
