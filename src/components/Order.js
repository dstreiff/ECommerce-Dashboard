
const Order = ({order}) => {
  return (
    <tr>
    <td>{order.productName}</td>
    <td>{order.productNumber}</td>
    <td>{order.paymentStatus}</td>
    <td className={` adf ${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}`}>{order.shipping}</td>

    <td className="primary"> <a href="/orders" >Details</a></td>
    </tr>
  )
}

export default Order

