import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector } from '../app/utils/selectors/selectors';
import { getProducts } from '../app/features/products/ProductSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function CustomizedTables() {
	const dispatch = useDispatch();
	const prodSelector = useSelector(productSelector);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		dispatch(getProducts());
		if (prodSelector.products.length !== 0) {
			setData([...prodSelector.products]);
		} else {
			dispatch(getProducts());
		}
		// eslint-disable-next-line
	}, [prodSelector.loading === 'created', dispatch]);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>name</StyledTableCell>
						<StyledTableCell align='center'>category</StyledTableCell>
						<StyledTableCell align='center'>sales price</StyledTableCell>
						<StyledTableCell align='right'>default price</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.length > 0 &&
						data.map((row, id) => (
							<StyledTableRow key={id}>
								<StyledTableCell component='th' scope='row'>
									{row.name}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{row.category.name}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{row.salesPrice}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row.defaultPrice}
								</StyledTableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
