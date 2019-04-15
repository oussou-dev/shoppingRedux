import React from "react"

class Filter extends React.Component {
	render() {
		const {
			count,
			size,
			sort,
			handleChangeSize,
			handleChangeSort
		} = this.props
		return (
			<div className="row">
				<div className="col-md-4">{count} products found</div>
				<div className="col-md-4">
					<label>
						Order by
						<select
							className="form-control"
							value={sort}
							onChange={handleChangeSort}
						>
							<option value=""> Select</option>
							<option value="lowest"> Lowest To Highest</option>
							<option value="highest"> Highest To Lowest</option>
						</select>
					</label>
				</div>
				<div className="col-md-4">
					<label>
						Filter size
						<select
							className="form-control"
							value={size}
							onChange={handleChangeSize}
						>
							<option value=""> All</option>
							<option value="x"> XS</option>
							<option value="s"> S</option>
							<option value="m"> M</option>
							<option value="l"> L</option>
							<option value="xl"> XL</option>
							<option value="xxl"> XXL</option>
						</select>
					</label>
				</div>
			</div>
		)
	}
}

export default Filter
