import React from "react"
import util from "../../util"

class Cart extends React.Component {
	render() {
		const { cartItems, handleRemoveFromCart } = this.props
		return (
			<div className="alert alert-info">
				{cartItems.length === 0 ? (
					<div className="mb-3 text-center text-muted">
						Cart is empty
					</div>
				) : (
					<div className="mb-3 text-center text-muted">
						You have {cartItems.length} products in the{" "}
						<i class="fas fa-cart-arrow-down" />
					</div>
				)}

				<hr />

				{cartItems.length > 0 && (
					<div>
						{/* <ul> */}
						{cartItems.map(item => (
							<p className="mb-2" key={item.id}>
								<b>{item.title}</b>
								<span className="far fa-times-circle mx-2" />
								{item.count}
								<button
									className="btn-sm btn-danger mx-2"
									onClick={() => handleRemoveFromCart(item)}
								>
									<span className="fas fa-trash" />
								</button>
							</p>
						))}

						<hr />
						<span className="">
							{" "}
							<b>
								Total in <i class="fas fa-shopping-cart" /> :
							</b>{" "}
						</span>

						<b className="ml-5">
							{util.formatCurrency(
								cartItems.reduce((a, c) => a + c.price * c.count, 0)
							)}
						</b>
					</div>
				)}
				<hr />
				<div className="text-center">
					<button
						className="btn btn-primary"
						onClick={() => alert("Checkout needs to implement...")}
					>
						Checkout <i class="fas fa-credit-card ml-2" />
					</button>
				</div>
			</div>
		)
	}
}

export default Cart
